export default function cleanPhone(phone) {
    // 1. Оставляем только цифры. 
    // Регулярка \D ищет всё, что НЕ является цифрой, и заменяет на пустую строку.
    let cleaned = phone.replace(/\D/g, '');

    // 2. Обработка российского формата (начинается с 8, длина 11 цифр)
    // Если человек ввел 8927..., мы должны превратить это в 7927...
    if (cleaned.length === 11 && cleaned.startsWith('8')) {
        cleaned = `7${cleaned.slice(1)}`;
    }

    // 3. Добавляем плюс в самое начало
    return `+${cleaned}`;
}