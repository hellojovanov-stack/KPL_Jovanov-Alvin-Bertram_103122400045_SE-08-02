# TP14 - Clean Code dan Guard Clause

## Analisis Kode

Kode awal menggunakan nested if yang cukup dalam sehingga sulit dibaca.

### Sebelum Refaktorisasi

```javascript
function processUser(user) {
    if (user) {
        if (user.isActive) {
            if (user.hasPermission) {
                return doSomething(user);
            }
        }
    }

    return null;
}
```

## Permasalahan

1. Terlalu banyak nested if.
2. Sulit dibaca.
3. Kompleksitas kode meningkat.
4. Sulit dipelihara.

## Solusi

Menggunakan teknik Guard Clause.

### Setelah Refaktorisasi

```javascript
function processUser(user) {
    if (!isValidCandidate(user)) {
        return null;
    }

    return doSomething(user);
}

function isValidCandidate(user) {
    return (
        user &&
        user.isActive &&
        user.hasPermission
    );
}
```

## Keuntungan Guard Clause

1. Alur program lebih jelas.
2. Mengurangi nested if.
3. Lebih mudah dibaca.
4. Mempermudah debugging.
5. Mudah dikembangkan.

## Kesimpulan

Guard Clause merupakan teknik Clean Code yang membantu mengurangi kompleksitas kode dengan melakukan validasi lebih awal. Hasilnya kode menjadi lebih sederhana, mudah dibaca, dan lebih mudah dipelihara.
