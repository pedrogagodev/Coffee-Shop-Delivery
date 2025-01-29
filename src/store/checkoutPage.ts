import { create } from 'zustand';

interface FormStore {
  formData: Record<string, string | number> | null;
  setFormData: (data: Record<string, string | number>) => void;
  resetFormData: () => void;
  paymentMethod: PaymentMethods | null;
  setPaymentMethod: (method: PaymentMethods) => void;
  resetPaymentMethod: () => void;
}

export type PaymentMethods =
  | 'Cartão de crédito'
  | 'Cartão de débito'
  | 'Dinheiro'
  | null;

export const useFormStore = create<FormStore>((set) => ({
  formData: {},
  setFormData: (data) => set({ formData: data }),
  resetFormData: () => set({ formData: null }),
  paymentMethod: null,
  setPaymentMethod: (method) => set({ paymentMethod: method }),
  resetPaymentMethod: () => set({ paymentMethod: null }),
}));
