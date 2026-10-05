document.addEventListener('DOMContentLoaded', function () {
    // কাউন্টার চলকসমূহ
    let heartCount = 0;
    let coinCount = 100;
    let copyCount = 0;

    const heartCountEl = document.getElementById('heart-count');
    const coinCountEl = document.getElementById('coin-count');
    const copyCountEl = document.getElementById('copy-count');

    // ১. হার্ট বাটন ফাংশনালিটি
    const heartBtns = document.querySelectorAll('.heart-btn');
    heartBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const icon = btn.querySelector('i');
            if (icon.classList.contains('fa-regular')) {
                icon.classList.remove('fa-regular');
                icon.classList.add('fa-solid', 'text-red-500');
                heartCount++;
            } else {
                icon.classList.remove('fa-solid', 'text-red-500');
                icon.classList.add('fa-regular');
                heartCount--;
            }
            heartCountEl.textContent = heartCount;
        });
    });

    // ২. কপি বাটন ফাংশনালিটি
    const copyBtns = document.querySelectorAll('.copy-btn');
    copyBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const card = btn.closest('.bg-white');
            const number = card.querySelector('.service-number').textContent.trim();
            
            navigator.clipboard.writeText(number).then(() => {
                copyCount++;
                copyCountEl.textContent = copyCount;
                alert(`Copied number: ${number}`);
            });
        });
    });

    // ৩. কল বাটন ও হিস্ট্রি ফাংশনালিটি
    const callBtns = document.querySelectorAll('.call-btn');
    const historyContainer = document.getElementById('history-container');

    callBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            if (coinCount < 20) {
                alert('Not enough coins to make a call!');
                return;
            }

            // কয়েন ২০ কমানো
            coinCount -= 20;
            coinCountEl.textContent = coinCount;

            const card = btn.closest('.bg-white');
            const serviceName = card.querySelector('.service-name').textContent.trim();
            const serviceNumber = card.querySelector('.service-number').textContent.trim();

            // যদি আগের নো-হিস্ট্রি মেসেজ থাকে তবে মুছে ফেলা
            if (historyContainer.querySelector('p') && historyContainer.querySelector('p').textContent.includes('No call history')) {
                historyContainer.innerHTML = '';
            }

            // বর্তমান সময় বের করা
            const now = new Date();
            let hours = now.getHours();
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            const ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12;
            hours = hours ? hours : 12;
            const timeString = `${String(hours).padStart(2, '0')}:${minutes}:${seconds} ${ampm}`;

            // নতুন হিস্ট্রি আইটেম তৈরি
            const historyItem = document.createElement('div');
            historyItem.className = 'bg-gray-50 border border-gray-100 p-3 rounded-xl flex justify-between items-center text-sm';
            historyItem.innerHTML = `
                <div>
                    <h4 class="font-bold text-gray-800">${serviceName}</h4>
                    <p class="text-gray-500 text-xs">${serviceNumber}</p>
                </div>
                <span class="text-xs text-gray-400">${timeString}</span>
            `;

            historyContainer.prepend(historyItem);
            alert(`Calling ${serviceName} (${serviceNumber})...`);
        });
    });

    // ৪. ক্লিয়ার হিস্ট্রি বাটন
    const clearHistoryBtn = document.getElementById('clear-history-btn');
    clearHistoryBtn.addEventListener('click', function () {
        historyContainer.innerHTML = '<p class="text-sm text-gray-400 text-center py-4">No call history yet</p>';
    });
});