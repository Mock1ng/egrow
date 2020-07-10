window.onload = () => {
    wrapper();
}

const data = [{
        nama: 'Ayu Tira Safitri',
        jurusan: 'Kimia',
        alamat: 'Ciputat, Tangerang Selatan',
        pengalaman: 'Pengajar tematik SD, IPA SMP dan Bahasa Arab dari tahun 2018'
    },
    {
        nama: 'Baywcksn',
        jurusan: 'Sistem Informasi',
        alamat: 'Cikupa, Tangerang',
        pengalaman: 'Pengajar pemrograman walau dalam mimpi'
    },
    {
        nama: 'Akubaru risuki',
        jurusan: 'Cinta Menggelora',
        alamat: 'Gatau, Daerah JakSel ae',
        pengalaman: 'Pengajar bucin-bucin agar segera menjadi fakboi'
    },
    {
        nama: 'Rijuki Rama',
        jurusan: 'Segala Bidang',
        alamat: 'Hmm, Depan TMII pokoknya',
        pengalaman: 'Pengejar kebahagiaan lewat kekesalan'
    },
    {
        nama: 'Hanifu',
        jurusan: 'Perkosan',
        alamat: 'Ciputat, TangSel (yoman bener)',
        pengalaman: 'Pengajar berbudidaya ketika bertamu di kosan orang'
    },
    {
        nama: '2Ayu Tira Safitri',
        jurusan: 'Kimia',
        alamat: 'Ciputat, Tangerang Selatan',
        pengalaman: 'Pengajar tematik SD, IPA SMP dan Bahasa Arab dari tahun 2018'
    },
    {
        nama: 'Baywcksn',
        jurusan: 'Sistem Informasi',
        alamat: 'Cikupa, Tangerang',
        pengalaman: 'Pengajar pemrograman walau dalam mimpi'
    },
    {
        nama: 'Akubaru risuki',
        jurusan: 'Cinta Menggelora',
        alamat: 'Gatau, Daerah JakSel ae',
        pengalaman: 'Pengajar bucin-bucin agar segera menjadi fakboi'
    },
    {
        nama: 'Rijuki Rama',
        jurusan: 'Segala Bidang',
        alamat: 'Hmm, Depan TMII pokoknya',
        pengalaman: 'Pengejar kebahagiaan lewat kekesalan'
    },
    {
        nama: 'Hanifu',
        jurusan: 'Perkosan',
        alamat: 'Ciputat, TangSel (yoman bener)',
        pengalaman: 'Pengajar berbudidaya ketika bertamu di kosan orang'
    },
    {
        nama: '3Ayu Tira Safitri',
        jurusan: 'Kimia',
        alamat: 'Ciputat, Tangerang Selatan',
        pengalaman: 'Pengajar tematik SD, IPA SMP dan Bahasa Arab dari tahun 2018'
    },
    {
        nama: 'Baywcksn',
        jurusan: 'Sistem Informasi',
        alamat: 'Cikupa, Tangerang',
        pengalaman: 'Pengajar pemrograman walau dalam mimpi'
    },
    {
        nama: 'Akubaru risuki',
        jurusan: 'Cinta Menggelora',
        alamat: 'Gatau, Daerah JakSel ae',
        pengalaman: 'Pengajar bucin-bucin agar segera menjadi fakboi'
    },
    {
        nama: 'Rijuki Rama',
        jurusan: 'Segala Bidang',
        alamat: 'Hmm, Depan TMII pokoknya',
        pengalaman: 'Pengejar kebahagiaan lewat kekesalan'
    },
    {
        nama: 'Hanifu',
        jurusan: 'Perkosan',
        alamat: 'Ciputat, TangSel (yoman bener)',
        pengalaman: 'Pengajar berbudidaya ketika bertamu di kosan orang'
    },
    {
        nama: '4Ayu Tira Safitri',
        jurusan: 'Kimia',
        alamat: 'Ciputat, Tangerang Selatan',
        pengalaman: 'Pengajar tematik SD, IPA SMP dan Bahasa Arab dari tahun 2018'
    },
    {
        nama: 'Baywcksn',
        jurusan: 'Sistem Informasi',
        alamat: 'Cikupa, Tangerang',
        pengalaman: 'Pengajar pemrograman walau dalam mimpi'
    },
    {
        nama: 'Akubaru risuki',
        jurusan: 'Cinta Menggelora',
        alamat: 'Gatau, Daerah JakSel ae',
        pengalaman: 'Pengajar bucin-bucin agar segera menjadi fakboi'
    },
    {
        nama: 'Rijuki Rama',
        jurusan: 'Segala Bidang',
        alamat: 'Hmm, Depan TMII pokoknya',
        pengalaman: 'Pengejar kebahagiaan lewat kekesalan'
    },
    {
        nama: 'Hanifu',
        jurusan: 'Perkosan',
        alamat: 'Ciputat, TangSel (yoman bener)',
        pengalaman: 'Pengajar berbudidaya ketika bertamu di kosan orang'
    },
    {
        nama: '5Ayu Tira Safitri',
        jurusan: 'Kimia',
        alamat: 'Ciputat, Tangerang Selatan',
        pengalaman: 'Pengajar tematik SD, IPA SMP dan Bahasa Arab dari tahun 2018'
    },
    {
        nama: 'Baywcksn',
        jurusan: 'Sistem Informasi',
        alamat: 'Cikupa, Tangerang',
        pengalaman: 'Pengajar pemrograman walau dalam mimpi'
    },
    {
        nama: 'Akubaru risuki',
        jurusan: 'Cinta Menggelora',
        alamat: 'Gatau, Daerah JakSel ae',
        pengalaman: 'Pengajar bucin-bucin agar segera menjadi fakboi'
    },
    {
        nama: 'Rijuki Rama',
        jurusan: 'Segala Bidang',
        alamat: 'Hmm, Depan TMII pokoknya',
        pengalaman: 'Pengejar kebahagiaan lewat kekesalan'
    },
    {
        nama: 'Hanifu',
        jurusan: 'Perkosan',
        alamat: 'Ciputat, TangSel (yoman bener)',
        pengalaman: 'Pengajar berbudidaya ketika bertamu di kosan orang'
    },
    {
        nama: '6Ayu Tira Safitri',
        jurusan: 'Kimia',
        alamat: 'Ciputat, Tangerang Selatan',
        pengalaman: 'Pengajar tematik SD, IPA SMP dan Bahasa Arab dari tahun 2018'
    },
    {
        nama: 'Baywcksn',
        jurusan: 'Sistem Informasi',
        alamat: 'Cikupa, Tangerang',
        pengalaman: 'Pengajar pemrograman walau dalam mimpi'
    },
    {
        nama: 'Akubaru risuki',
        jurusan: 'Cinta Menggelora',
        alamat: 'Gatau, Daerah JakSel ae',
        pengalaman: 'Pengajar bucin-bucin agar segera menjadi fakboi'
    },
    {
        nama: 'Rijuki Rama',
        jurusan: 'Segala Bidang',
        alamat: 'Hmm, Depan TMII pokoknya',
        pengalaman: 'Pengejar kebahagiaan lewat kekesalan'
    },
    {
        nama: 'Hanifu',
        jurusan: 'Perkosan',
        alamat: 'Ciputat, TangSel (yoman bener)',
        pengalaman: 'Pengajar berbudidaya ketika bertamu di kosan orang'
    },
    {
        nama: 'Akubaru risuki',
        jurusan: 'Cinta Menggelora',
        alamat: 'Gatau, Daerah JakSel ae',
        pengalaman: 'Pengajar bucin-bucin agar segera menjadi fakboi'
    },
    {
        nama: 'Rijuki Rama',
        jurusan: 'Segala Bidang',
        alamat: 'Hmm, Depan TMII pokoknya',
        pengalaman: 'Pengejar kebahagiaan lewat kekesalan'
    },
    {
        nama: 'Hanifu',
        jurusan: 'Perkosan',
        alamat: 'Ciputat, TangSel (yoman bener)',
        pengalaman: 'Pengajar berbudidaya ketika bertamu di kosan orang'
    },
    {
        nama: '7Ayu Tira Safitri',
        jurusan: 'Kimia',
        alamat: 'Ciputat, Tangerang Selatan',
        pengalaman: 'Pengajar tematik SD, IPA SMP dan Bahasa Arab dari tahun 2018'
    },
    {
        nama: 'Baywcksn',
        jurusan: 'Sistem Informasi',
        alamat: 'Cikupa, Tangerang',
        pengalaman: 'Pengajar pemrograman walau dalam mimpi'
    },
    {
        nama: 'Akubaru risuki',
        jurusan: 'Cinta Menggelora',
        alamat: 'Gatau, Daerah JakSel ae',
        pengalaman: 'Pengajar bucin-bucin agar segera menjadi fakboi'
    }
];
// Variables
const table = document.querySelector('table');
const btnContainer = document.querySelector('.pagination-btn');
const tbody = document.querySelector('tbody');

// Additions
let btnCounter = parseInt(Math.ceil(data.length / 10));
let start = 1;
let end = 10;
let tempData = data.slice(start - 1, end);
let dataCounter = start;

// Functions
const injectTable = (data) => {
    tbody.innerHTML = '';

    for (let i = 1; i <= data.length; i++) {

        const tr = document.createElement('tr');
        tr.style.animation = `fadeInTable 1s ease-in-out forwards ${i * 0.01}s`
        tr.innerHTML = `
                <td class="data">${dataCounter}</td>
                <td class="data">${data[i - 1].nama}</td>
                <td class="data">${data[i - 1].jurusan}</td>
                <td class="data">${data[i - 1].alamat}</td>
                <td class="data">${data[i - 1].pengalaman}</td>
            `;
        dataCounter++;
        tbody.appendChild(tr);
    }
}

const paginationButton = () => {
    for (let i = 0; i < btnCounter; i++) {
        const button = document.createElement('button');
        button.innerText = i + 1;
        btnContainer.appendChild(button);
    }
}



const paging = () => {
    const buttonSelect = document.querySelectorAll('button');
    buttonSelect[0].classList.add('active');

    btnContainer.onclick = e => {
        if (e.target.classList[0] !== 'pagination-btn') {
            for (let i = 0; i < buttonSelect.length; i++) {
                buttonSelect[i].classList.remove('active');
            }

            let whereBtnClicked = parseInt(e.target.innerText);
            start = ((whereBtnClicked - 1) * 10) + 1;
            end = 10 * whereBtnClicked;
            dataCounter = start;

            tempData = data.slice(start - 1, end);
            injectTable(tempData);
            buttonSelect[whereBtnClicked - 1].classList.add('active');
        }
    }
}

const wrapper = () => {
    injectTable(tempData);
    paginationButton();
    paging();
}