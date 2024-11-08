const adviceSets = {
  happy: [
    "Enjoy this happiness and find joy in small things too.",
    "Share your happiness with others; it grows when shared.",
    "This is the time to make memorable moments—do something creative!",
    "When you're happy, your motivation to achieve your goals also grows.",
    "Remember, your happiness brings joy to those around you."
  ],
  sad: [
    "This time will pass; give yourself some time and self-love.",
    "Share your sadness with someone close, it will lighten your heart.",
    "Write or express your emotions creatively.",
    "Remind yourself that challenges don’t last forever.",
    "Focus on little things that can bring you some happiness."
  ],
  anger: [
    "Try deep breathing or meditation; it may help calm your anger.",
    "Try to understand the root cause of your anger and find a solution.",
    "Think before yelling at others; a gentle approach works better.",
    "Go for a walk or do some physical activity to reduce anger.",
    "Remember, speaking calmly helps others understand you better."
  ],
  anxiety: [
    "Take deep breaths and focus on the present; it will reduce anxiety.",
    "Write down your thoughts and consider what is real and what is just worry.",
    "Include relaxation and self-care time in your daily routine.",
    "Be kind to yourself and don’t judge harshly.",
    "Focus on what you can control, and take small steps forward."
  ],
  love: [
    "Express your feelings openly; it strengthens your relationships.",
    "Spend time with loved ones; these moments are memorable.",
    "Be caring and supportive; it deepens love.",
    "Your honesty and trust will strengthen your relationship.",
    "Do something special for your loved ones, even without a reason."
  ],
  surprise: [
    "Accept new experiences with an open heart; surprises can be positive.",
    "Every surprise can be a new learning opportunity.",
    "Try to find something good in unexpected things too.",
    "Each new experience has its own charm, enjoy it.",
    "Remember, surprises make you flexible and adaptable in life."
  ],
  boredom: [
    "Try new hobbies or learn something new to reduce boredom.",
    "Go outdoors or do some physical activity; it will change your mood.",
    "Sometimes, this downtime is needed to recharge.",
    "Ask yourself what brings you joy, and pursue that.",
    "Do something creative or write your thoughts; inspiration can come from boredom too."
  ],
  contentment: [
    "Appreciate your achievements and acknowledge your progress.",
    "Slow down and enjoy the moment; this is the peace of life.",
    "Feel grateful for what you have.",
    "Protect your inner peace and stay away from others' opinions.",
    "This is the time to align with your goals and remain steady."
  ],
  excitement: [
    "Channel your energy into your passions and goals; this is the time for growth.",
    "Direct your excitement towards new ideas or projects.",
    "Share this positive energy with others; vibes are contagious!",
    "Fully explore your new experiences; opportunities are near.",
    "This is the time to be productive and creative; achieve what you’ve dreamed of!"
  ],
  fear: [
    "Face your fears and overcome what you're afraid to lose.",
    "Step out of your comfort zone little by little; growth lies here.",
    "Remind yourself that you are powerful and capable.",
    "Accept your fears, and keep taking small steps despite them.",
    "Knowledge and practice can help you conquer what scares you."
  ],
  motivated: [
    "Every day is a new chance to grow.",
    "Keep pushing; success is around the corner.",
    "Don't stop until you're proud.",
    "Your dreams and goals are waiting for your hard work; get closer every day.",
    "Believe in yourself and keep moving forward—you can achieve what you think."
  ]
};


document.getElementById('searchBtn').addEventListener('click', function() {
  const keyword = document.getElementById('searchBar').value.toLowerCase();

  if (adviceSets[keyword]) {
    // Display random advice based on the keyword (mood)
    const moodAdvice = adviceSets[keyword];
    const randomAdvice = moodAdvice[Math.floor(Math.random() * moodAdvice.length)];
    document.getElementById('adviceBox').innerText = randomAdvice;
  } else {
    document.getElementById('adviceBox').innerText = "Sorry, no advice found for that mood.";
  }
});

document.getElementById('getAdviceBtn').addEventListener('click', function() {
    fetch('https://api.adviceslip.com/advice')
      .then(response => response.json())
      .then(data => {
        document.getElementById('adviceBox').innerText = data.slip.advice;
      })
      .catch(error => {
        document.getElementById('adviceBox').innerText = 'Sorry, something went wrong!';
        console.error('Error fetching advice:', error);
      });
  });
  

 