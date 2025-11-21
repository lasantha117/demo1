import { GoogleGenAI, Type } from "@google/genai";
import { QuoteRequest, AIQuoteResponse } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getAIQuoteEstimate = async (request: QuoteRequest): Promise<AIQuoteResponse> => {
  try {
    const model = 'gemini-2.5-flash';
    const prompt = `
      Act as a professional pressure washing estimator for "HydroClean Solutions".
      The user wants an estimate for:
      Surface: ${request.surfaceType}
      Size: ${request.squareFootage} sq ft.
      Additional Details: ${request.details || 'None'}

      Provide a realistic price range (USD), estimated time to complete, a brief recommendation for the cleaning method (e.g., soft wash vs pressure wash), and a standard disclaimer that this is an online estimate and subject to on-site inspection.
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            estimatedPriceRange: { type: Type.STRING },
            estimatedTime: { type: Type.STRING },
            recommendation: { type: Type.STRING },
            disclaimer: { type: Type.STRING },
          },
          required: ["estimatedPriceRange", "estimatedTime", "recommendation", "disclaimer"]
        }
      }
    });

    const text = response.text;
    if (!text) {
      throw new Error("No response from AI");
    }

    return JSON.parse(text) as AIQuoteResponse;

  } catch (error) {
    console.error("Error fetching AI quote:", error);
    return {
      estimatedPriceRange: "Contact for pricing",
      estimatedTime: "Varies",
      recommendation: "Please contact us directly for a complex quote.",
      disclaimer: "AI service temporarily unavailable."
    };
  }
};
