# Team10Lifts
**AI-Powered Fitness Tracking and Progression Platform**

---

## Table of Contents
- Overview
- Problem
- Solution
- Core Features
- System Architecture
- Security and Data Protection
- AI Infrastructure
- Current Implementation Status
- Project Structure
- How to Run
- Roadmap
- Team Roles
- Quick Setup Reference
- Future Work

---

### Overview

Team10Lifts is a fitness tracking application designed to help users log workouts, monitor progression, and recieve AI-powered training support.

The platform focuses on one of the most important principles in fitness: **progression overload**. Many users stuggle to imporve because they don't consistently track their workouts or know how to adjust their training over time.

This project combines:
- Workout logging
- Secure user authentication
- Personalized exercise tracking
- AI-generated training suggestions
- Offline-first performance planning
- A simple, fast mobile experience

---

### Problem

Many people go to the gym consistently without seeing clear progress because they are not tracking their workouts accuractely.

Common issues include:
- No structured workout history
- Difficulty knowing when to increase weight or reps
- Lack of personalized training guidance
- Intimidation for beginners who don't know where to start
- Friction in logging workouts during a session

Without a system for tracking performance and progression, users can easily repeat the same workouts without improving.

---

### Solution

Team10Lifts provides a simple and intelligent system for workout tracking and progression.

The app is designed to help users:
1. Create and manage an account
2. Log workouts quickly
3. Store workout history securely 
4. Track personal progression over time
5. Recieve AI-powered suggesiotns for future lifts and programming.

The long-term goal is to create a fitness app that feels fast, accessible, and helpful for both beginners and experienced lifters.

---

### Core Features

**Functional Requirements**

The system is designed to support the following core features:
- User authentication and account management
- Workout logging
- Logbook of past activity
- Workout program support
- Workout program support
- AI-based progression suggestions

### Non-Functional Requirements

The system also prioritizes:
- Friendly UI with fewer than 3 taps to start or log a workout
- Fast AI response time, with suggestions targeted to load in under 10 seconds
- Secure storage and protection of personal workout data
- Reliable mobile session persistence
- Offline-first logging support for better in-gym usability

### Example Use Cases
- **Fitness novice:** wants AI to generate a plan so the gym feels less intimidating
- **Experienced lifter:** wants accurate logs to track progression over time
- **Busy user:** wants quick suggestions on what to lift and when

---

### System Architecture

Team10Lifts is built around a mobile frontend, a Supabase backend, and an AI suggestion layer.

### Main Components

**Mobile App Frontend**
- Built for quick workout interaction
- Uses NativeWind for styling
- Supports user login and workout logging

**Supabase Backend**
- Handles authentication
- Stores user profiles
- Enforces Row Level Security for user data protection

**AI Suggestion Layer**
- Powered through an Edge Function
- Uses workout history to generate progression recommendation
- Secures API secrets using the Supabase secret vault

### Current Database Tables
- `profiles`
- `exercises`
- `workouts`
- `set_logs`

---

### Security and Data Protection

Security is a core part of the system design.

### Row Level Security (RLS)

RLS has been enabled on:
- `profiles`
- `workouts`
- `set_logs`
- `exercises`

### Exercise Access Model

The `exercises` table supports both shared and private data:
- **Global exercises:** readable by all users when `user_id is null`
- **Private exercises** only readable and writeable by the creator when `auth.uid() = user_id`

This structure allows the app to offer shared exercise templates while also supporting personal custom exercises.

### Automatic Onboarding

A `handle_new_user()` database function and trigger automatically create the necessary profile data when a new user signs up.

---

### AI Infrastructure

Team10Lifts includes an AI layer designed to support progression and programming.

### Current AI Setup
- Edge Function created: `suggest-progression`
- Local project linked to Supabase cloud project
- `AI_API_KEY` stored securely using the Supabase CLI secret vault

### Planned AI Behavior

The AI system is intended to:
- Analyze recent workout history
- Review the user's past 3 weeks of logs
- Help users make better training decisions without overthinking

---

### Current Implementation Status

**Backend Foundation**
- Created core database schema for users, workouts, exercises, and set logs
- Added automatic onboarding through a database trigger
- Configured supabase project linking

**Security**
- Enabled RLS across core tables
- Refined exercise access policies for global and private records
- Fixed overlappting policy issues by separating permissions cleanly

**Frontend Connection**
- Created `lib/supabase.ts`
- Configured the 2026 publishable key format
- Added `AsyncStorage` support for persistent login sessions
- Built a basic auth login screen for testing account creation

**AI Setup**
- Created the `suggest-progression` Edge Function
- Stored AI secrets securely in Supabase