    document.addEventListener('DOMContentLoaded', function(){
        let clickBtn = document.querySelector('.open-btn');
        let closeBtn = document.querySelector('.close-btn');
        let modal = document.querySelector('.modal');
        let video = document.querySelector('.modal-content video');
        function toggleModal(){
            modal.classList.toggle('show-modal');
            // 检查模态框是否关闭
            if(!modal.classList.contains('show-modal') && video){
                video.pause();
                // 恢复背景滑动
                document.body.style.overflow = '';
            } else {
                // 禁用背景滑动
                document.body.style.overflow = 'hidden';
            }
        }
        clickBtn.addEventListener('click', toggleModal);
        closeBtn.addEventListener('click', toggleModal);
        window.addEventListener('click', function(e){
            if(e.target == modal){
                toggleModal();
            }
        });
        });