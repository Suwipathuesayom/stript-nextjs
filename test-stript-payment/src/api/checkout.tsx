import { loadStripe, Stripe } from "@stripe/stripe-js";

// ประกาศ type สำหรับรายการสินค้าที่จะชำระเงิน
type LineItem = {
  price: string;
  quantity: number;
};

// ประกาศ type สำหรับพารามิเตอร์ของฟังก์ชัน checkout
type CheckoutParams = {
  lineItems: LineItem[];
};

// ฟังก์ชัน checkout สำหรับเริ่มกระบวนการชำระเงินผ่าน Stripe
export async function checkout({ lineItems }: CheckoutParams): Promise<void> {
  // ตัวแปรสำหรับเก็บ instance ของ Stripe
  let stripePromise: Stripe | null = null;

  // ฟังก์ชันที่จะสร้างและรีเทิร์น instance ของ Stripe
    const getStripe = async (): Promise<Stripe> => {
        if (!stripePromise) {
            stripePromise = await loadStripe(process.env.NEXT_PUBLIC_API_KEY!);
        }
       
        // รีเทิร์น instance ของ Stripe
        return stripePromise!;
    };


  // เรียกใช้ฟังก์ชัน getStripe เพื่อรับ instance ของ Stripe
  const stripe = await getStripe();

  // ส่งผู้ใช้ไปยังหน้า checkout ของ Stripe
  await stripe.redirectToCheckout({
    mode: 'payment',
    lineItems,
    successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
    cancelUrl: window.location.origin,
  });
}
