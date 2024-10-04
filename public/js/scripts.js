function showSection(sectionId) {
    // 隐藏初始页面
    document.getElementById('initialPage').style.display = 'none';

    // 隐藏所有的子页面
    const sections = document.querySelectorAll('main > section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // 显示指定的 section
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.style.display = 'block';
    }

    // 显示 "Back" 按钮
    document.getElementById('backButton').style.display = 'block';
}

function goBack() {
    // 隐藏所有的子页面
    const sections = document.querySelectorAll('main > section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // 显示初始页面
    document.getElementById('initialPage').style.display = 'block';

    // 隐藏 "Back" 按钮
    document.getElementById('backButton').style.display = 'none';
}
