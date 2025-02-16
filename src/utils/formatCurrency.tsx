type iAppProps = {
  amount: number;
  currency: "EUR" | "USD" | "RUB";
};

export function formatCurrency({ amount, currency }: iAppProps) {
  return new Intl.NumberFormat("fr-BE", {
    style: "currency",
    currency: currency,
  }).format(amount);
}
