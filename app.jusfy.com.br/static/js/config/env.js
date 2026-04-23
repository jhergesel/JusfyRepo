import {
    z
} from "zod";

const envSchema = z.object({
    NODE_ENV: z.enum(["development", "test", "qa", "staging", "production"]),

    // Jusfy Backend API
    REACT_APP_API_URL: z.url(),

    // JusPDF
    REACT_APP_PDF_URL: z.url().optional(),
    REACT_APP_PDF_DOWNLOAD_BASE_URL: z.url().optional(),

    // JusGPT
    REACT_APP_JUSGPT_API: z.url().optional(),

    // Jusbill
    REACT_APP_JUSBILL_URL: z.url().optional(),

    // JusfyPay
    REACT_APP_JUSFYPAY_URL: z.url().default('https://pay.jusfy.com.br'),

    // Recaptcha
    REACT_APP_RECAPTCHA_SITEKEY: z.string(),
    REACT_APP_RECAPTCHA_V2_SITEKEY: z.string(),
    REACT_APP_RECAPTCHA_V3_SITEKEY: z.string(),

    // Pagar.me
    REACT_APP_PAGARME_ENCRYPTION_KEY: z.string(),
    REACT_APP_PAGARME_V5_ENCRYPTION_KEY: z.string(),

    // CEP API
    REACT_APP_CEP_API_BASE_URL: z.url(),

    // Feature Flags
    REACT_APP_FEATURE_FLAG_API_URL: z.url(),
    REACT_APP_FEATURE_FLAG_CLIENT_KEY: z.string(),
    REACT_APP_FEATURE_FLAG_APP_NAME: z.string(),
    REACT_APP_FEATURE_FLAG_REFRESH_INTERVAL: z.coerce
        .number()
        .int()
        .nonnegative()
        .default(15),
    REACT_APP_JUSFY_FEATURE_FLAG_API_URL: z.url(),
    REACT_APP_FEATURE_FLAG_API_KEY: z.string(),

    // Sockets
    REACT_APP_SOCKET_URL: z.url(),
    REACT_APP_SOCKET_PATH: z.string(),

    // Sentry
    REACT_APP_SENTRY_ENV: z.string(),
    REACT_APP_SENTRY_SAMPLE_RATE: z.coerce
        .number()
        .min(0)
        .max(1)
        .default(0),

    REACT_APP_SENTRY_SAMPLE_TRACE_RATE: z.coerce
        .number()
        .min(0)
        .max(1)
        .default(0),

    // JusSign
    REACT_APP_JUSSIGN_MAX_EXPIRATION_DAYS: z.coerce
        .number()
        .int()
        .positive()
        .optional()
        .default(365),

    // Plugins
    DISABLE_ESLINT_PLUGIN: z.coerce.boolean().default(false),

    NOTIFY_TECH_CHANNEL: z
        .union([z.url(), z.literal("")])
        .optional()
        .default(""),

    REACT_APP_MAX_FILE_SIZE_MB: z.coerce.number().int().positive().default(80),

    // Sidebar
    REACT_APP_SIDEBAR_NEW_TAG_DURATION_DAYS: z.coerce
        .number()
        .int()
        .positive()
        .default(30),
});

const _env = envSchema.safeParse(process.env);

if (!_env.success) {
    console.error("❌ Invalid environment variables:");
    _env.error.issues.forEach(issue => {
        console.error(`- ${issue.path.join(".")}: ${issue.message}`);
    });
    throw new Error("Invalid environment variables!");
}

const validatedEnv = _env.data;

export const config = deepFreeze({
    nodeEnv: validatedEnv.NODE_ENV,

    jusfyBackend: {
        apiUrl: validatedEnv.REACT_APP_API_URL,
    },

    jusPdf: {
        url: validatedEnv.REACT_APP_PDF_URL,
        downloadBaseUrl: validatedEnv.REACT_APP_PDF_DOWNLOAD_BASE_URL,
    },

    jusGpt: {
        apiUrl: validatedEnv.REACT_APP_JUSGPT_API,
    },

    jusbill: {
        url: validatedEnv.REACT_APP_JUSBILL_URL,
    },

    jusfyPay: {
        url: validatedEnv.REACT_APP_JUSFYPAY_URL,
    },

    recaptcha: {
        siteKey: validatedEnv.REACT_APP_RECAPTCHA_SITEKEY,
        siteKeyV2: validatedEnv.REACT_APP_RECAPTCHA_V2_SITEKEY,
        siteKeyV3: validatedEnv.REACT_APP_RECAPTCHA_V3_SITEKEY,
    },

    pagarme: {
        encryptionKey: validatedEnv.REACT_APP_PAGARME_ENCRYPTION_KEY,
        v5EncryptionKey: validatedEnv.REACT_APP_PAGARME_V5_ENCRYPTION_KEY,
    },

    cepApi: {
        baseUrl: validatedEnv.REACT_APP_CEP_API_BASE_URL,
    },

    featureFlag: {
        apiUrl: validatedEnv.REACT_APP_FEATURE_FLAG_API_URL,
        clientKey: validatedEnv.REACT_APP_FEATURE_FLAG_CLIENT_KEY,
        appName: validatedEnv.REACT_APP_FEATURE_FLAG_APP_NAME,
        refreshInterval: validatedEnv.REACT_APP_FEATURE_FLAG_REFRESH_INTERVAL,
        featureFlagApiUrl: validatedEnv.REACT_APP_JUSFY_FEATURE_FLAG_API_URL,
        featureFlagApiKey: validatedEnv.REACT_APP_FEATURE_FLAG_API_KEY,
    },

    sockets: {
        url: validatedEnv.REACT_APP_SOCKET_URL,
        path: validatedEnv.REACT_APP_SOCKET_PATH,
    },

    sentry: {
        env: validatedEnv.REACT_APP_SENTRY_ENV,
        sampleRate: validatedEnv.REACT_APP_SENTRY_SAMPLE_RATE,
    },

    jussign: {
        maxExpirationDays: validatedEnv.REACT_APP_JUSSIGN_MAX_EXPIRATION_DAYS,
        maxFileSizeMb: validatedEnv.REACT_APP_MAX_FILE_SIZE_MB,
        maxFileSizeBytes: validatedEnv.REACT_APP_MAX_FILE_SIZE_MB * 1024 * 1024,
    },

    plugins: {
        disableEslint: validatedEnv.DISABLE_ESLINT_PLUGIN,
    },

    slack: {
        notifyTechChannel: validatedEnv.NOTIFY_TECH_CHANNEL,
    },

    sidebar: {
        newTagDurationDays: validatedEnv.REACT_APP_SIDEBAR_NEW_TAG_DURATION_DAYS,
    },
});

function deepFreeze(obj) {
    if (!obj || typeof obj !== "object" || Object.isFrozen(obj)) return obj;
    Object.getOwnPropertyNames(obj).forEach(prop => {
        const value = obj[prop];
        if (value && typeof value === "object") deepFreeze(value);
    });
    return Object.freeze(obj);
}