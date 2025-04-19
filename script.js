document.addEventListener('DOMContentLoaded', () => {
    // 添加页面载入动画
    const container = document.querySelector('.container');
    container.style.opacity = '0';
    container.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        container.style.transition = 'all 1s ease';
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
    }, 100);

    // 创建漂浮爱心
    function createFloatingHeart() {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = '100vh';
        heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
        heart.style.opacity = '0';
        heart.style.transition = 'all 1s ease';
        document.querySelector('.floating-hearts').appendChild(heart);

        setTimeout(() => {
            heart.style.opacity = '1';
            heart.style.transform = `translateY(-${Math.random() * 100 + 100}vh) rotate(${Math.random() * 360}deg)`;
        }, 10);

        setTimeout(() => {
            heart.remove();
        }, 3000);
    }

    // 创建漂浮星星
    function createFloatingStar() {
        const star = document.createElement('div');
        star.innerHTML = '⭐';
        star.style.position = 'fixed';
        star.style.left = Math.random() * 100 + 'vw';
        star.style.top = '100vh';
        star.style.fontSize = (Math.random() * 15 + 5) + 'px';
        star.style.opacity = '0';
        star.style.transition = 'all 1s ease';
        document.querySelector('.floating-stars').appendChild(star);

        setTimeout(() => {
            star.style.opacity = '1';
            star.style.transform = `translateY(-${Math.random() * 100 + 100}vh) rotate(${Math.random() * 360}deg)`;
        }, 10);

        setTimeout(() => {
            star.remove();
        }, 3000);
    }

    // 创建漂浮泡泡
    function createFloatingBubble() {
        const bubble = document.createElement('div');
        bubble.style.position = 'fixed';
        bubble.style.left = Math.random() * 100 + 'vw';
        bubble.style.top = '100vh';
        bubble.style.width = (Math.random() * 20 + 10) + 'px';
        bubble.style.height = bubble.style.width;
        bubble.style.background = 'rgba(255, 255, 255, 0.3)';
        bubble.style.borderRadius = '50%';
        bubble.style.opacity = '0';
        bubble.style.transition = 'all 1s ease';
        document.querySelector('.floating-bubbles').appendChild(bubble);

        setTimeout(() => {
            bubble.style.opacity = '1';
            bubble.style.transform = `translateY(-${Math.random() * 100 + 100}vh) scale(${Math.random() * 0.5 + 0.5})`;
        }, 10);

        setTimeout(() => {
            bubble.remove();
        }, 3000);
    }

    // 每隔一段时间创建新的元素
    setInterval(createFloatingHeart, 300);
    setInterval(createFloatingStar, 500);
    setInterval(createFloatingBubble, 400);

    // 为卡片添加点击效果
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            card.style.transform = 'scale(1.02)';
            setTimeout(() => {
                card.style.transform = 'scale(1)';
            }, 200);
        });
    });

    // 添加鼠标移动视差效果
    document.addEventListener('mousemove', (e) => {
        const cards = document.querySelectorAll('.card');
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;

        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const cardX = rect.left + rect.width / 2;
            const cardY = rect.top + rect.height / 2;
            
            const angleX = (mouseY - cardY / window.innerHeight) * 10;
            const angleY = (mouseX - cardX / window.innerWidth) * 10;
            
            card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
        });
    });

    // 添加小黄人眨眼效果
    const minionEyes = document.querySelectorAll('.minion-eye');
    setInterval(() => {
        minionEyes.forEach(eye => {
            eye.style.height = '2px';
            setTimeout(() => {
                eye.style.height = '30px';
            }, 200);
        });
    }, 3000);

    // 添加小狗眨眼效果
    const puppyEyes = document.querySelectorAll('.puppy-eye');
    setInterval(() => {
        puppyEyes.forEach(eye => {
            eye.style.height = '2px';
            eye.style.transition = 'all 0.1s ease';
            setTimeout(() => {
                eye.style.height = '35px';
            }, 200);
        });
    }, 4000);

    // 添加小狗耳朵动画
    const puppyEars = document.querySelectorAll('.puppy-ear');
    setInterval(() => {
        puppyEars[0].style.transform = 'rotate(-20deg)';
        puppyEars[1].style.transform = 'rotate(20deg)';
        setTimeout(() => {
            puppyEars[0].style.transform = 'rotate(-30deg)';
            puppyEars[1].style.transform = 'rotate(30deg)';
        }, 300);
    }, 3000);

    // 添加小狗按钮效果
    const puppyButton = document.querySelector('.puppy-card .love-button');
    puppyButton.addEventListener('click', () => {
        const puppy = document.querySelector('.puppy-body');
        const tail = document.querySelector('.puppy-tail');
        
        // 加快尾巴摇动
        tail.style.animation = 'wagTail 0.3s ease-in-out infinite';
        
        // 创建爱心效果
        for (let i = 0; i < 10; i++) {
            const heart = document.createElement('div');
            heart.innerHTML = '❤️';
            heart.style.position = 'absolute';
            heart.style.left = Math.random() * 200 - 50 + 'px';
            heart.style.top = Math.random() * 200 - 100 + 'px';
            heart.style.fontSize = Math.random() * 20 + 10 + 'px';
            heart.style.opacity = '0';
            heart.style.transition = 'all 0.5s ease';
            heart.style.transform = 'scale(0)';
            heart.style.zIndex = '1000';
            puppy.appendChild(heart);

            setTimeout(() => {
                heart.style.opacity = '1';
                heart.style.transform = 'scale(1) translate(' + (Math.random() * 100 - 50) + 'px, ' + (Math.random() * 100 - 50) + 'px)';
            }, i * 100);

            setTimeout(() => {
                heart.style.opacity = '0';
                heart.style.transform = 'scale(0)';
                setTimeout(() => heart.remove(), 500);
            }, 1500 + i * 100);
        }

        // 添加跳跃效果
        puppy.style.animation = 'puppyJump 0.5s ease-in-out';
        
        setTimeout(() => {
            puppy.style.animation = 'float 3s ease-in-out infinite';
            tail.style.animation = 'wagTail 1s ease-in-out infinite';
        }, 500);

        // 播放汪汪声
        const woofs = ['🐕', '🦮', '🐶', '🐾'];
        const woof = document.createElement('div');
        woof.style.position = 'absolute';
        woof.style.top = '-30px';
        woof.style.left = '50%';
        woof.style.transform = 'translateX(-50%)';
        woof.style.fontSize = '30px';
        woof.innerHTML = woofs[Math.floor(Math.random() * woofs.length)];
        woof.style.opacity = '0';
        woof.style.transition = 'all 0.3s ease';
        puppy.appendChild(woof);

        setTimeout(() => {
            woof.style.opacity = '1';
            woof.style.top = '-60px';
        }, 100);

        setTimeout(() => {
            woof.style.opacity = '0';
            woof.style.top = '-90px';
            setTimeout(() => woof.remove(), 300);
        }, 1000);
    });

    // 添加长颈鹿斑点动画
    const spots = document.querySelectorAll('.giraffe-spots span');
    spots.forEach((spot, index) => {
        spot.style.animationDelay = `${index * 0.2}s`;
    });

    // 添加乒乓球动画
    const balls = document.querySelectorAll('.ping-pong-balls span');
    balls.forEach((ball, index) => {
        ball.style.animationDelay = `${index * 0.2}s`;
    });

    // 添加打字效果
    const typingText = document.querySelector('.typing-text');
    const messages = [
        "喜欢你，就像喜欢长颈鹿一样温柔",
        "喜欢你，就像喜欢小黄人一样可爱",
        "喜欢你，就像喜欢小狗一样忠诚",
        "喜欢你，就像喜欢乒乓球一样充满活力"
    ];
    let currentMessageIndex = 0;
    let currentCharIndex = 0;

    function typeMessage() {
        if (currentCharIndex < messages[currentMessageIndex].length) {
            typingText.textContent += messages[currentMessageIndex][currentCharIndex];
            currentCharIndex++;
            setTimeout(typeMessage, 100);
        } else {
            setTimeout(() => {
                typingText.textContent = '';
                currentCharIndex = 0;
                currentMessageIndex = (currentMessageIndex + 1) % messages.length;
                setTimeout(typeMessage, 500);
            }, 2000);
        }
    }

    setTimeout(typeMessage, 1000);

    // 添加按钮点击效果
    const loveButtons = document.querySelectorAll('.love-button');
    loveButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 创建点击效果
            for (let i = 0; i < 10; i++) {
                createFloatingHeart();
            }
            
            // 添加按钮动画
            button.style.transform = 'scale(1.1)';
            setTimeout(() => {
                button.style.transform = 'scale(1)';
            }, 200);
        });
    });
}); 