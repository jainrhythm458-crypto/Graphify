#  Graphify

> A Netflix-inspired collaborative recommendation engine simulator built using graph theory and the Jaccard Similarity algorithm.



##  Overview

Graphify is an interactive visualization of how recommendation systems work.

Instead of simply displaying recommendations, it simulates the complete recommendation pipeline using graph theory, collaborative filtering, and an interactive force-directed network.

Users can choose a profile, browse watched content, and watch the recommendation engine identify the most similar user before generating personalized recommendations.

---

##  Features

-  Netflix-inspired modern UI
-  Multiple user profiles
-  Movies & Shorts recommendation modes
-  Jaccard Similarity based collaborative filtering
-  Interactive force-directed graph visualization
-  Real-time recommendation pipeline animation
-  Dynamic similarity score calculation
- Mathematical explanation panel
-  Draggable graph nodes

---

##  Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)
- Canvas API
- Graph Theory
- Jaccard Similarity Algorithm
- Force Directed Graph Physics

---

##  How the Recommendation Works

1. User selects a profile.
2. The watched titles are converted into a set.
3. Every other user is compared using the Jaccard Similarity Index.

```
Similarity = |Intersection| / |Union|
```

4. The user with the highest similarity score is selected.
5. Unwatched titles from that user become recommendations.
6. The entire process is visualized as an interactive graph.

---

##  Getting Started

Clone the repository

```bash
git clone https://github.com/jainrhythm458-crypto/Graphify.git
```

Open the project folder and launch:

```
index.html
```

No additional installation is required.

---

## Project Structure

```
Graphify
│
├── index.html
├── style.css
├── app.js
└── README.md
```

---

##  Future Improvements

- Content-based filtering
- Hybrid recommendation system
- User login system
- Backend database integration
- Real movie dataset
- Recommendation history
- Dark/Light theme
- Responsive mobile version

---

##  Author

**Rhythm Jain**

DTU | Electrical Engineering

GitHub:
https://github.com/jainrhythm458-crypto

---

##  Support

If you found this project interesting, consider giving it a ⭐ on GitHub.
