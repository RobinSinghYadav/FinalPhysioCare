# PhysioCare: Web-Based Consultation System for Physiotherapy Services

**PhysioCare** is a full-stack, interactive web application that offers virtual physiotherapy services, including real-time therapist consultations, a virtual exercise library, and AI-powered live exercise tracking. It is designed to make physiotherapy accessible, convenient, and personalized for patients from the comfort of their homes.

## 🚀 Features

- 🔐 **Secure Authentication** – Role-based login system for patients and therapists.
- 📅 **Appointment Scheduling** – Patients can book consultations with available therapists.
- 💬 **Live Therapist Consultations** – Secure video sessions via Jitsi Meet integration.
- 🎥 **Virtual Exercise Library** – Guided video exercises with categories and intensity levels.
- 📊 **Progress Dashboard** – Visual tracking of exercise completion and therapy milestones.
- 🧠 **AI-Powered Motion Tracking** – Real-time pose correction using TensorFlow and MediaPipe.
- 🔔 **Smart Notifications** – Reminders for appointments, exercises, and therapy updates.
- 📈 **Therapist Panel** – Session logging, patient feedback review, and plan adjustments.
- 🛡️ **Admin Panel** – System monitoring, user management, and activity logging.

## 🛠 Tech Stack

### Frontend:
- React.js
- Tailwind CSS
- Jitsi Meet API

### Backend:
- Node.js
- Express.js
- MongoDB (Mongoose ODM)

### AI & Computer Vision:
- Python
- TensorFlow
- MediaPipe
- OpenCV (for exercise posture analysis)

### Other Tools:
- JWT for Authentication
- Postman for API Testing
- Git & GitHub for Version Control

## 📂 Project Structure

```bash
PhysioCare/
│
├── frontend/               # React App for user interface
│   ├── components/
│   ├── pages/
│   └── assets/
│
├── backend/                # Express backend APIs
│   ├── routes/
│   ├── controllers/
│   └── models/
│
├── ai-module/              # Python-based live tracking logic
│   ├── pose_tracking.py
│   └── utils/
│
└── README.md               # Project Documentation
 How to Run the Project Locally
Clone the repository:

bash
Copy
Edit
git clone https://github.com/your-username/FinalPhysioCare.git
cd FinalPhysioCare
Install dependencies:

Frontend:

bash
Copy
Edit
cd frontend
npm install
npm run dev
Backend:

bash
Copy
Edit
cd ../backend
npm install
npm run dev
AI Module (Python):

bash
Copy
Edit
cd ../ai-module
pip install -r requirements.txt
python pose_tracking.py
