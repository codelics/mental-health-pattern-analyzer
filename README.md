# 🧠 Mental Health Pattern Analyzer

A modern web application designed to help users track their emotional well-being, identify mental health patterns, and gain actionable insights through data visualization and mood analysis.

> **Note:** This project is intended for self-reflection and wellness tracking. It is **not** a substitute for professional medical advice, diagnosis, or treatment.

---

## 🎯 Project Goal

The goal of the Mental Health Pattern Analyzer is to provide users with an intuitive platform to:

- Track daily moods and emotional states
- Record personal journal entries and mental health check-ins
- Monitor recurring emotional patterns over time
- Visualize trends through dashboards and reports
- Encourage self-awareness and healthier habits
- Support early identification of behavioral or emotional changes

---

## ✨ Features

- 🔐 User Authentication (Login & Registration)
- 📊 Interactive Dashboard
- 😊 Daily Mood Check-ins
- 📝 Personal Journal / Episode Tracking
- 📈 Mental Health Reports & Analytics
- 📅 Timeline of Emotional Patterns
- 📱 Responsive User Interface
- 🎨 Modern UI Components

---

## 🛠 Tech Stack

### Frontend

- **Next.js 15**
- **React 19**
- **TypeScript**
- **Tailwind CSS**

### Backend & Database

- **Supabase**
  - Authentication
  - PostgreSQL Database
  - REST APIs

### UI Components

- shadcn/ui
- Radix UI
- Lucide React Icons

### Development Tools

- npm
- ESLint
- Git
- GitHub

---

## 📂 Project Structure

```
src/
├── app/
│   ├── dashboard/
│   ├── login/
│   ├── register/
│   └── test/
├── components/
│   ├── landing/
│   └── ui/
├── lib/
│   └── supabase/
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/codelics/mental-health-pattern-analyzer.git
```

### 2. Navigate to the project

```bash
cd mental-health-pattern-analyzer
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create an environment file

Create a `.env.local` file and add:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 5. Run the development server

```bash
npm run dev
```

Open your browser and visit:

```
http://localhost:3000
```

---

## 📊 Planned Enhancements

- AI-powered mood analysis
- Personalized wellness recommendations
- Habit tracking
- Notification reminders
- Data export (PDF/CSV)
- Therapist dashboard
- Crisis resource integration
- Dark mode
- Mobile application

---

## 🔒 Privacy

User privacy is a priority. Personal mental health data should be securely stored and protected using modern authentication and database security practices.

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature/your-feature
```

3. Commit your changes

```bash
git commit -m "Add new feature"
```

4. Push to GitHub

```bash
git push origin feature/your-feature
```

5. Open a Pull Request

---

## 📄 License

This project is intended for educational and research purposes. Choose and add an appropriate open-source license if you plan to distribute it publicly.

---

## 👨‍💻 Author

**GitHub:** https://github.com/codelics
