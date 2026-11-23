/**
 * API client for NexaU Cloud API (c:\Users\rama\Downloads\nexau-cloud-api)
 * Implements the official frontend contracts specified in docs/FRONTEND-PAYMENTS.md
 */

export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://api.mash.cloud";

export interface PlanOrder {
  order_id: string;
  provider: string;
  provider_order_id: string;
  status: "pending" | "attempted" | "paid" | "failed" | "expired";
  amount_paise: number;
  sku_id: string;
  plan_code: string;
  period_days: number;
  currency: string;
  expires_at: string;
}

export interface CheckoutResponse {
  order: PlanOrder;
  key_id: string;
  provider: string;
  provider_order_id: string;
}

export interface RazorpayConfirmPayload {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}

export interface SubscriptionStatus {
  tenant_id: string;
  plan_code: string;
  plan_name: string;
  status: "active" | "none" | "past_due";
  current_period_end?: string;
  days_remaining: number;
}

/**
 * Creates an order on nexau-cloud-api for a plan period (e.g. plan_pro_1m)
 * Calls POST /v1/payments/checkout
 */
export async function createCheckoutOrder(
  skuId: string = "plan_pro_1m",
  accessToken?: string
): Promise<CheckoutResponse> {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    "Idempotency-Key": typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : `order_${Date.now()}`
  };

  if (accessToken) {
    headers["Authorization"] = `Bearer ${accessToken}`;
  }

  const res = await fetch(`${API_BASE_URL}/v1/payments/checkout`, {
    method: "POST",
    headers,
    body: JSON.stringify({ sku_id: skuId })
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.error?.message || `Checkout failed: ${res.status}`);
  }

  return res.json();
}

/**
 * Confirms a captured payment by sending Razorpay's signature triplet to nexau-cloud-api
 * Calls POST /v1/payments/confirm
 */
export async function confirmPayment(
  payload: RazorpayConfirmPayload,
  accessToken?: string
): Promise<{ order: PlanOrder }> {
  const headers: Record<string, string> = {
    "Content-Type": "application/json"
  };

  if (accessToken) {
    headers["Authorization"] = `Bearer ${accessToken}`;
  }

  const res = await fetch(`${API_BASE_URL}/v1/payments/confirm`, {
    method: "POST",
    headers,
    body: JSON.stringify(payload)
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.error?.message || `Payment confirmation failed: ${res.status}`);
  }

  return res.json();
}

/**
 * Fetches the user's active plan and subscription status
 * Calls GET /v1/payments/subscription
 */
export async function getSubscriptionStatus(
  accessToken: string
): Promise<SubscriptionStatus> {
  const res = await fetch(`${API_BASE_URL}/v1/payments/subscription`, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch subscription: ${res.status}`);
  }

  return res.json();
}
