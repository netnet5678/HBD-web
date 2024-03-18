const audioPlayer = document.getElementById("audio-player");

function playAudioFromTime(startTime, endTime, volume) {
  audioPlayer.currentTime = startTime;
  audioPlayer.volume = volume;
  // หยุดเล่นเสียงเมื่อถึงช่วงเวลาที่กำหนด
  setTimeout(() => {
    audioPlayer.pause();
  }, (endTime - startTime) * 1000);
}
window.onload = audioPlayer.play()
// ตัวอย่างการใช้งาน
playAudioFromTime(144, 161, 0.1); // เล่นเสียงตั้งแต่นาทีที่ 1 ถึงนาทีที่ 2