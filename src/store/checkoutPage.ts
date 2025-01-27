import { create } from 'zustand';

interface FormStore {
  formData: Record<string, string | number> | null;
  setFormData: (data: Record<string, string | number>) => void;
  resetFormData: () => void;
  paymentMethod: PaymentMethods | null;
  setPaymentMethod: (arg0: PaymentMethods) => void;
}

export type PaymentMethods =
  | 'Cartão de crédito'
  | 'Cartão de débito'
  | 'Dinheiro';

export const useFormStore = create<FormStore>((set) => ({
  formData: {},
  setFormData: (data) => set({ formData: data }),
  resetFormData: () => set({ formData: null }),
  paymentMethod: null,
  setPaymentMethod: (arg0) => set({ paymentMethod: arg0 }),
}));
