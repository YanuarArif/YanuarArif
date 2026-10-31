interface ImportMetaEnv {
  /** Optional POST endpoint for the contact form. Leave unset to show the integration placeholder. */
  readonly VITE_CONTACT_ENDPOINT?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
