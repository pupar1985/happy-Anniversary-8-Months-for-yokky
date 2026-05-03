function checkPassword() {
            var pass = document.getElementById("myPassword").value;
            
            // เปลี่ยน "1402" เป็นรหัสวันครบรอบของคุณจริงๆ 
            if(pass === "120968") {
                alert("เย้! รหัสถูกต้อง รักนะโยคกี้ 💕");
                // หากต้องการให้รหัสผ่านถูกแล้วเด้งไปหน้าอื่น ให้ลบ // บรรทัดล่างออก แล้วใส่ชื่อไฟล์
                window.location.href = "index2.html";
            } else {
                alert("รหัสผิดน้าาา จำวันครบรอบไม่ได้เหรอ! 😠");
            }
        }
