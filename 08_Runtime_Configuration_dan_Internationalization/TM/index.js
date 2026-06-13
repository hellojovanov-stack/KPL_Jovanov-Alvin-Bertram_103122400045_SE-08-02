require('dotenv').config({ quiet: true });

async function cekKurs(rupiah) {
    try {
        const response = await fetch(process.env.BASE_API);
        const data = await response.json();

        const cny = rupiah * data.rates.CNY;
        const eur = rupiah * data.rates.EUR;

        const tanggal = new Intl.DateTimeFormat('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        }).format(new Date());

        const formatIDR = new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR'
        }).format(rupiah);

        const formatCNY = new Intl.NumberFormat('zh-CN', {
            style: 'currency',
            currency: 'CNY'
        }).format(cny);

        const formatEUR = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(eur);

        console.log(
            `Kurs ${formatIDR} pada ${tanggal} adalah ${formatCNY} dan ${formatEUR}`
        );
    } catch (error) {
        console.error('Error:', error.message);
    }
}

cekKurs(25000);
cekKurs(50000);
cekKurs(100000);