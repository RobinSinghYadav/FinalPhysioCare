import React, { useRef, useEffect, useState, useContext } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { 
  Clock, 
  Phone, 
  Mail, 
  MapPin, 
  User, 
  Calendar, 
  Activity, 
  Dumbbell, 
  Building2, 
  FileText,
  Download
} from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { assets } from '../assets/assets';

function DoctorPrescription() {
  const prescriptionRef = useRef(null);
  const { id } = useParams();
  const location = useLocation();
  const { backendUrl, token } = useContext(AppContext);
  const [appointmentData, setAppointmentData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Treatment plans for different specialities
  const treatmentPlans = {
    "Posture Correction Exercises": {
      exercises: [
        {
          exercise: "Wall Angels",
          setsReps: "3x10",
          instructions: "Stand with back against wall, arms at 90°, slide arms up and down"
        },
        {
          exercise: "Chin Tucks",
          setsReps: "3x15",
          instructions: "Gently draw chin back creating a 'double chin', hold briefly"
        },
        {
          exercise: "Thoracic Extension",
          setsReps: "2x30s",
          instructions: "Use foam roller under mid-back, extend spine gently"
        }
      ],
      guidelines: [
        "Maintain awareness of posture throughout the day",
        "Take breaks from sitting every 30 minutes",
        "Use ergonomic support when sitting for long periods"
      ]
    },
    
    "Mobility Exercises": {
      exercises: [
        {
          exercise: "Hip Circles",
          setsReps: "2x10 each direction",
          instructions: "Stand on one leg, circle other leg in controlled motion"
        },
        {
          exercise: "Shoulder Rotations",
          setsReps: "3x8 each arm",
          instructions: "Use resistance band, focus on full range of motion"
        },
        {
          exercise: "Ankle Mobility",
          setsReps: "2x12 each foot",
          instructions: "Draw alphabet with toes, maintain controlled movements"
        }
      ],
      guidelines: [
        "Perform exercises when muscles are warm",
        "Focus on smooth, controlled movements",
        "Never force a joint beyond comfortable range"
      ]
    },
    
    "Balance and Coordination Exercises": {
      exercises: [
        {
          exercise: "Single Leg Stand",
          setsReps: "3x30s each leg",
          instructions: "Stand on one foot, maintain balance, progress to eyes closed"
        },
        {
          exercise: "Tandem Walking",
          setsReps: "3x20 steps",
          instructions: "Walk heel-to-toe in straight line, arms out for balance"
        },
        {
          exercise: "Ball Toss",
          setsReps: "2x1 minute",
          instructions: "Stand on one leg while tossing/catching ball against wall"
        }
      ],
      guidelines: [
        "Ensure safe environment with support nearby if needed",
        "Progress gradually from easier to more challenging exercises",
        "Practice exercises daily for best results"
      ]
    },
    
    "Strengthening Exercise": {
      exercises: [
        {
          exercise: "Bodyweight Squats",
          setsReps: "3x12",
          instructions: "Keep weight in heels, knees aligned with toes, chest up"
        },
        {
          exercise: "Push-ups (Modified if needed)",
          setsReps: "3x10",
          instructions: "Maintain straight line from head to heels, elbows at 45°"
        },
        {
          exercise: "Resistance Band Rows",
          setsReps: "3x15",
          instructions: "Squeeze shoulder blades together, keep elbows close to body"
        }
      ],
      guidelines: [
        "Rest 48 hours between strengthening same muscle groups",
        "Increase resistance gradually as strength improves",
        "Focus on proper form rather than number of repetitions"
      ]
    },
    
    "Stretching Exercises": {
      exercises: [
        {
          exercise: "Hamstring Stretch",
          setsReps: "3x30s each leg",
          instructions: "Extend leg on elevated surface, lean forward from hips"
        },
        {
          exercise: "Chest/Pectoral Stretch",
          setsReps: "3x20s each side",
          instructions: "Place arm against wall/doorframe, rotate body away gently"
        },
        {
          exercise: "Neck Side Stretch",
          setsReps: "2x15s each side",
          instructions: "Tilt ear toward shoulder, gentle pressure with hand"
        }
      ],
      guidelines: [
        "Hold stretches without bouncing",
        "Stretch to point of tension, not pain",
        "Breathe deeply and relax into each stretch"
      ]
    },
    
    "Core Stability Exercises": {
      exercises: [
        {
          exercise: "Plank",
          setsReps: "3x30s",
          instructions: "Maintain neutral spine, engage abdominals, avoid hip sagging"
        },
        {
          exercise: "Bird Dog",
          setsReps: "3x10 each side",
          instructions: "Extend opposite arm/leg while maintaining stable core"
        },
        {
          exercise: "Dead Bug",
          setsReps: "3x12 each side",
          instructions: "Press lower back into floor while extending limbs"
        }
      ],
      guidelines: [
        "Focus on quality of movement rather than speed",
        "Engage core muscles throughout daily activities",
        "Breathe normally during exercises, avoid holding breath"
      ]
    }
  };
  
  // Add local implementation of slotDateFormat
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const slotDateFormat = (slotDate) => {
    if (!slotDate) return 'Not scheduled';
    const dateArray = slotDate.split('_');
    return dateArray[0] + " " + months[Number(dateArray[1] - 1)] + " " + dateArray[2];
  };
  
  // Add local implementation of calculateAge
  const calculateAge = (dob) => {
    if (!dob) return 'N/A';
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    return age;
  };
  
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Fetch appointment data
  useEffect(() => {
    const fetchAppointmentData = async () => {
      try {
        // If we have state from navigation, use it directly
        if (location.state && location.state.appointmentData) {
          setAppointmentData(location.state.appointmentData);
          setLoading(false);
          return;
        }
        
        // Otherwise fetch from API
        const { data } = await axios.get(`${backendUrl}/api/user/appointment/${id}`, {
          headers: { token }
        });
        
        if (data.success) {
          setAppointmentData(data.appointment);
        }
      } catch (error) {
        console.error('Error fetching appointment data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointmentData();
  }, [id, backendUrl, token, location.state]);

  const handleDownloadPDF = async () => {
    if (!prescriptionRef.current) return;

    try {
      // Improved settings for better image quality
      const canvas = await html2canvas(prescriptionRef.current, {
        scale: 3, // Increased scale for better quality
        logging: false,
        useCORS: true,
        allowTaint: true,
        imageTimeout: 15000 // Increased timeout for image loading
      });

      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgData = canvas.toDataURL('image/png', 1.0); // Maximum quality
      
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save('PhysioCare-Treatment-Plan.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading prescription...</p>
        </div>
      </div>
    );
  }

  if (!appointmentData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <p className="text-xl text-gray-700">Appointment not found</p>
        </div>
      </div>
    );
  }

  // Format appointment date for display
  const formattedAppointmentDate = appointmentData.slotDate ? 
    slotDateFormat(appointmentData.slotDate) : 'Not scheduled';

  // Get the appropriate treatment plan based on doctor's speciality
  const doctorSpeciality = appointmentData.docData.speciality;
  const currentTreatmentPlan = treatmentPlans[doctorSpeciality] || {
    exercises: [
      {
        exercise: "Shoulder Mobility",
        setsReps: "3x10",
        instructions: "Gentle rotations with resistance band, focus on form"
      },
      {
        exercise: "Lower Back Stretch",
        setsReps: "2x30s",
        instructions: "Hold each stretch, avoid bouncing movements"
      },
      {
        exercise: "Core Stabilization",
        setsReps: "3x15",
        instructions: "Maintain neutral spine throughout the exercise"
      }
    ],
    guidelines: [
      "Apply ice pack for 15 minutes after exercises",
      "Maintain proper posture during daily activities",
      "Stop exercise if sharp pain occurs"
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div ref={prescriptionRef}>
          {/* Header */}
          <div className="bg-white rounded-t-xl shadow-sm p-6 border-b-2" style={{ borderColor: '#5F6FFF' }}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                {/* Fixed logo dimensions with proper aspect ratio and object-fit */}
                <img 
                  className="h-16 w-auto object-contain" 
                  src={assets.logo} 
                  alt="Logo" 
                  style={{ maxWidth: '60px' }}
                />
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">PhysioCare</h1>
                  <p className="text-gray-500">Advanced Physical Therapy & Rehabilitation</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Treatment Plan ID: #{appointmentData._id.substring(0, 8)}</p>
                <p className="text-sm text-gray-500">{currentDate}</p>
              </div>
            </div>
          </div>

          {/* Doctor & Clinic Info */}
          <div className="bg-white shadow-sm p-6 grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <User className="w-5 h-5" style={{ color: '#5F6FFF' }} />
                Physiotherapist Information
              </h2>
              <div className="flex items-start gap-4">
                <img 
                  src={appointmentData.docData.image} 
                  alt={appointmentData.docData.name}
                  className="w-24 h-24 rounded-lg object-cover"
                />
                <div className="space-y-2">
                  <p className="text-gray-900 font-medium">Dr. {appointmentData.docData.name}</p>
                  <p className="text-gray-600">{appointmentData.docData.speciality}</p>
                  <p className="text-gray-600">License No: {appointmentData.docData.licenseNumber || 'PT-2024-789'}</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <Building2 className="w-5 h-5" style={{ color: '#5F6FFF' }} />
                Clinic Details
              </h2>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <p>{appointmentData.docData.address.line1}, {appointmentData.docData.address.line2}</p>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Phone className="w-4 h-4" />
                  <p>{appointmentData.docData.phone || '+1 (555) 987-6543'}</p>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Mail className="w-4 h-4" />
                  <p>{appointmentData.docData.email || 'doctor@physioflex.care'}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Patient Information */}
          <div className="bg-white shadow-sm p-6 space-y-4">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <User className="w-5 h-5" style={{ color: '#5F6FFF' }} />
              Patient Information
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="text-gray-700"><span className="font-medium">Name:</span> {appointmentData.userData.name}</p>
                <p className="text-gray-700"><span className="font-medium">Age:</span> {appointmentData.userData.dob ? calculateAge(appointmentData.userData.dob) : 'N/A'} years</p>
              </div>
              <div className="space-y-2">
                <p className="text-gray-700"><span className="font-medium">Phone:</span> {appointmentData.userData.phone || 'Not provided'}</p>
                <p className="text-gray-700"><span className="font-medium">Email:</span> {appointmentData.userData.email || 'Not provided'}</p>
              </div>
            </div>
          </div>

          {/* Appointment Details */}
          <div className="bg-white shadow-sm p-6 space-y-4">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <Calendar className="w-5 h-5" style={{ color: '#5F6FFF' }} />
              Session Details
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="w-4 h-4" />
                <p>Appointment: {formattedAppointmentDate} at {appointmentData.slotTime}</p>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <FileText className="w-4 h-4" />
                <p>Initial Assessment & Treatment</p>
              </div>
            </div>
          </div>

          {/* Treatment Plan */}
          <div className="bg-white shadow-sm p-6 space-y-4">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <Activity className="w-5 h-5" style={{ color: '#5F6FFF' }} />
              Treatment Plan: {doctorSpeciality}
            </h2>
            <div className="space-y-4">
              <div className="border-b pb-4">
                <div className="grid grid-cols-12 gap-4 font-medium text-gray-700 mb-2">
                  <div className="col-span-4">Exercise</div>
                  <div className="col-span-2">Sets/Reps</div>
                  <div className="col-span-6">Instructions</div>
                </div>
                {currentTreatmentPlan.exercises.map((exercise, index) => (
                  <div key={index} className="grid grid-cols-12 gap-4 text-gray-600">
                    <div className="col-span-4">{exercise.exercise}</div>
                    <div className="col-span-2">{exercise.setsReps}</div>
                    <div className="col-span-6">{exercise.instructions}</div>
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                <p className="font-medium text-gray-900">Treatment Guidelines:</p>
                {currentTreatmentPlan.guidelines.map((guideline, index) => (
                  <p key={index} className="text-gray-600">- {guideline}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-white rounded-b-xl shadow-sm p-6 mt-6">
            <div className="border-b pb-4 mb-4">
              <h3 className="font-medium text-gray-900 mb-2">Payment Information</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="text-gray-600">
                  <p>Consultation Fee: ${appointmentData.docData.fees}</p>
                  <p>Mode of Payment: Cash/Card/UPI accepted</p>
                </div>
                <div className="flex items-center">
                  {appointmentData.cancelled && (
                    <div className="px-4 py-2 border border-red-500 rounded text-red-500">
                      Appointment Cancelled
                    </div>
                  )}
                  
                  {!appointmentData.cancelled && appointmentData.payment && (
                    <div className="px-4 py-2 border rounded text-white bg-green-400">
                      Paid Online
                    </div>
                  )}
                  
                  {!appointmentData.cancelled && !appointmentData.payment && (
                    <div className="px-4 py-2 border rounded text-amber-600 bg-amber-50">
                      Cash Payment
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="space-y-2">
                <p className="text-sm text-gray-500">
                  This is a digital treatment plan issued by PhysioCare
                </p>
                <p className="text-sm text-gray-500 font-medium">
                  ⚠️ Important: Please bring this prescription during your clinic visit for reference and verification
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">Dr. {appointmentData.docData.name}</p>
                <p className="text-sm text-gray-500">Digital Signature</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 text-center space-x-4">
          {/* <button 
            className="px-8 py-3 rounded-full font-medium hover:opacity-90 transition-colors inline-flex items-center gap-2 text-white"
            style={{ backgroundColor: '#5F6FFF' }}
          >
            <Calendar className="w-5 h-5" />
            Schedule Next Session
          </button> */}
          <button 
            onClick={handleDownloadPDF}
            className="px-8 py-3 rounded-full font-medium hover:opacity-90 transition-colors inline-flex items-center gap-2 bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
          >
            <Download className="w-5 h-5" />
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
}

export default DoctorPrescription;