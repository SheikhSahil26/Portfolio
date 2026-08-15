interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface ContactApiResponse {
  success: boolean;
  message?: string;
  error?: string;
}

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';

export async function sendContactForm(data: ContactFormData): Promise<ContactApiResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: result.error || 'Failed to send message.',
      };
    }

    return {
      success: true,
      message: result.message || 'Message sent successfully!',
    };
  } catch (error) {
    console.error('API call error:', error);
    return {
      success: false,
      error: 'Network error. Please check your connection or backend status.',
    };
  }
}
