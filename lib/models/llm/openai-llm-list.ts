import { LLM } from "@/types"

const OPENAI_PLATORM_LINK = "https://platform.openai.com/docs/overview"

// OpenAI Models (UPDATED 1/25/24) -----------------------------

// GPT-4 Omni
const GPT4Omni: LLM = {
  modelId: "gpt-4o",
  modelName: "GPT-4 Omni",
  provider: "openai",
  hostedId: "gpt-4o",
  platformLink: OPENAI_PLATORM_LINK,
  imageInput: true,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 2.5,
    outputCost: 10
  }
}

// GPT-4 Omni Mini
const GPT4OmniMini: LLM = {
  modelId: "gpt-4o-mini",
  modelName: "GPT-4 Omni Mini",
  provider: "openai",
  hostedId: "gpt-4o-mini",
  platformLink: OPENAI_PLATORM_LINK,
  imageInput: true,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.15,
    outputCost: 0.6
  }
}

// GPT-4 Turbo (UPDATED 1/25/24)
const GPT4O1: LLM = {
  modelId: "o1",
  modelName: "O1",
  provider: "openai",
  hostedId: "o1",
  platformLink: OPENAI_PLATORM_LINK,
  imageInput: false,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 15,
    outputCost: 60
  }
}

// GPT-4 Vision (UPDATED 12/18/23)
const GPT4O1Mini: LLM = {
  modelId: "o1-mini",
  modelName: "O1 Mini",
  provider: "openai",
  hostedId: "o1-mini",
  platformLink: OPENAI_PLATORM_LINK,
  imageInput: true,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 1.1,
    outputCost: 4.4
  }
}

export const OPENAI_LLM_LIST: LLM[] = [
  GPT4Omni,
  GPT4OmniMini,
  GPT4O1,
  GPT4O1Mini
]
