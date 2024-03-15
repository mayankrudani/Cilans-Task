export const getDiscountPercentage = (actualPrice: number, percentage: number) => {
    const discount = (actualPrice * percentage) / 100
    const Price: number = actualPrice - discount
    return Number(Price.toFixed(0))
}