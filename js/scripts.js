// 切换页面区块的显示和滑动到对应位置
document.querySelectorAll('.nav-button').forEach(button => {
    button.addEventListener('click', () => {
        const sectionId = button.getAttribute('data-section');
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// 鼠标粒子效果
document.addEventListener('mousemove', function(e) {
    for (let i = 0; i < 10; i++) {
        let particle = document.createElement('div');
        particle.className = 'particle';

        // 浅粉色系
        let colors = ['#ffe4e1', '#f8bbd0', '#ffebee'];
        let color = colors[Math.floor(Math.random() * colors.length)];
        particle.style.backgroundColor = color;

        document.body.appendChild(particle);

        // 粒子随机偏移
        let offsetX = (Math.random() - 0.5) * 15;
        let offsetY = (Math.random() - 0.5) * 15;

        particle.style.left = `${e.pageX + offsetX}px`;
        particle.style.top = `${e.pageY + offsetY}px`;

        requestAnimationFrame(() => {
            particle.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(0.5)`;
            particle.style.opacity = '0';
        });

        // 1.5秒后移除粒子
        setTimeout(() => {
            particle.remove();
        }, 1500);
    }
});


// 获取 YOYOSIMS 标题元素
const yoyosimsTitle = document.querySelector('header h1');

// 跟随鼠标的最大移动距离
const maxDistance = 20; // 最大的位移量（像素）

let isMouseInside = false; // 判断鼠标是否在标题内
let mouseTimeout; // 用于控制弹回效果的定时器

// 当鼠标进入标题区域时，开始监听鼠标移动
yoyosimsTitle.addEventListener('mouseenter', () => {
    isMouseInside = true;
    document.addEventListener('mousemove', handleMouseMove);
});

// 当鼠标离开标题区域时，停止监听并开始弹回效果
yoyosimsTitle.addEventListener('mouseleave', () => {
    isMouseInside = false;
    document.removeEventListener('mousemove', handleMouseMove);
    
    // 开始弹回动画
    yoyosimsTitle.classList.add('jelly');
    
    // 等动画播放完移除动画类，恢复正常状态
    clearTimeout(mouseTimeout);
    mouseTimeout = setTimeout(() => {
        yoyosimsTitle.style.transform = 'translate(0, 0)'; // 回到初始位置
        yoyosimsTitle.classList.remove('jelly');
    }, 600); // 动画持续时间 600ms
});

// 处理鼠标移动事件，控制标题的跟随效果
function handleMouseMove(e) {
    if (!isMouseInside) return;

    const boundingBox = yoyosimsTitle.getBoundingClientRect();
    
    // 计算鼠标相对于标题中心的位置
    const offsetX = e.clientX - (boundingBox.left + boundingBox.width / 2);
    const offsetY = e.clientY - (boundingBox.top + boundingBox.height / 2);
    
    // 限制偏移量的最大值，确保移动不超过 maxDistance
    const limitedX = Math.max(-maxDistance, Math.min(maxDistance, offsetX / 10));
    const limitedY = Math.max(-maxDistance, Math.min(maxDistance, offsetY / 10));
    
    // 应用偏移量
    yoyosimsTitle.style.transform = `translate(${limitedX}px, ${limitedY}px)`;
}





document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');

    // 生成星星的容器，不清空整个 header 内容
    const starContainer = document.createElement('div');
    starContainer.className = 'star-container';
    
    // 生成 200 个星星
    for (let i = 0; i < 200; i++) {
        let star = document.createElement('div');
        star.className = 'star';

        // 随机生成星星的大小和位置
        star.style.setProperty('--random1', Math.random());
        star.style.setProperty('--random2', Math.random());
        star.style.setProperty('--random3', Math.random());

        // 设置不同的闪烁时间以使星星随机闪烁
        let delay = Math.random() * 5;
        star.style.animationDelay = `${delay}s`;

        // 将星星添加到 starContainer 中
        starContainer.appendChild(star);
    }

    // 将星星容器添加到 header 中
    header.appendChild(starContainer);
});





