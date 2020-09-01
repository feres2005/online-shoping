export default function formatCurrency(num) {
    return "$" + Number(num.Fixed(1)).toLocaleString() + " ";
  }