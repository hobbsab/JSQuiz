const express = require('express');
const router = express.Router();
const { Score } = require('../models');

// Endpoint to submit a new score
router.post('/submit', async (req, res) => {
  const { name, score } = req.body;

  if (!name || !score) {
    return res.status(400).json({ error: 'Name and score are required' });
  }

  try {
    await Score.create({ name, score });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit score' });
  }
});

// Endpoint to get the top 5 scores
router.get('/top', async (req, res) => {
  try {
    const topScores = await Score.findAll({
      limit: 5,
      order: [['score', 'DESC']],
    });
    res.json(topScores);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve leaderboard' });
  }
});

module.exports = router;








initialsForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const initialsInput = document.getElementById('initials');
  const initials = initialsInput.value;

  if (!initials) {
    alert('Name is required');
    return;
  }

  // Send the score to the server
  fetch('/leaderboard/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ initials, score }),
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      alert('Score submitted!');
      fetchLeaderboard();
    } else {
      alert('Failed to submit score');
    }
  })
  .catch(error => console.error('Error:', error));
});

function fetchLeaderboard() {
  fetch('/leaderboard/top')
  .then(response => response.json())
  .then(data => {
    const scoresList = document.getElementById('scores-list');
    scoresList.innerHTML = '';

    data.forEach((entry) => {
      const li = document.createElement('li');
      li.textContent = `${entry.name}: ${entry.score}`;
      scoresList.appendChild(li);
    });
  })
  .catch(error => console.error('Error:', error));
}

// Fetch leaderboard when the page loads
fetchLeaderboard();
  
//save initials
  console.log(initials);
  initialsInput.value = '';