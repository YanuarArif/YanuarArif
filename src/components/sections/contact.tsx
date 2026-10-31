import {
  ArrowUpRight,
  CheckCircle2,
  Info,
  LoaderCircle,
  Mail,
  MapPin,
  Send,
  TriangleAlert,
} from 'lucide-react'
import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from 'react'

import { SectionHeading } from '@/components/sections/section-heading'
import { Button } from '@/components/ui/button'
import { FieldError, Input, Label, Textarea } from '@/components/ui/form-fields'
import { SocialIcon } from '@/components/ui/social-icon'
import { profile } from '@/data/profile'

const CONTACT_ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT?.trim() || undefined

interface ContactValues {
  name: string
  email: string
  subject: string
  message: string
}

type FieldName = keyof ContactValues
type FormErrors = Partial<Record<FieldName, string>>
type SubmitState = 'idle' | 'submitting' | 'success' | 'error' | 'unconfigured'

const emptyValues: ContactValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

const fieldIds: Record<FieldName, string> = {
  name: 'contact-name',
  email: 'contact-email',
  subject: 'contact-subject',
  message: 'contact-message',
}

function validate(values: ContactValues): FormErrors {
  const errors: FormErrors = {}

  if (values.name.trim().length < 2) {
    errors.name = 'Please enter your name.'
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
    errors.email = 'Enter a valid email address so I can reply.'
  }

  if (values.subject.trim().length < 3) {
    errors.subject = 'Add a short subject line.'
  }

  if (values.message.trim().length < 20) {
    errors.message = 'A little more detail helps — at least 20 characters.'
  }

  return errors
}

export function Contact() {
  const [values, setValues] = useState<ContactValues>(emptyValues)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<SubmitState>('idle')
  const statusRef = useRef<HTMLDivElement>(null)
  const successRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (status === 'success') {
      successRef.current?.focus()
    }
  }, [status])

  const handleChange =
    (field: FieldName) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = event.target.value
      setValues((previous) => ({ ...previous, [field]: value }))

      setErrors((previous) => {
        if (!previous[field]) return previous
        const next = { ...previous }
        delete next[field]
        return next
      })

      if (status === 'error' || status === 'unconfigured') {
        setStatus('idle')
      }
    }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const nextErrors = validate(values)
    setErrors(nextErrors)

    const firstError = (Object.keys(nextErrors) as FieldName[])[0]
    if (firstError) {
      document.getElementById(fieldIds[firstError])?.focus()
      return
    }

    if (!CONTACT_ENDPOINT) {
      setStatus('unconfigured')
      window.requestAnimationFrame(() => statusRef.current?.focus())
      return
    }

    setStatus('submitting')

    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...values,
          source: profile.siteUrl,
        }),
      })

      if (!response.ok) {
        throw new Error(`Contact request failed with status ${response.status}`)
      }

      setValues(emptyValues)
      setErrors({})
      setStatus('success')
    } catch {
      setStatus('error')
      window.requestAnimationFrame(() => statusRef.current?.focus())
    }
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="section-anchor border-t border-border bg-muted/30 py-20 md:py-28"
    >
      <div className="container-page">
        <div className="overflow-hidden rounded-3xl border border-border bg-card">
          <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative border-b border-border p-6 sm:p-8 lg:border-r lg:border-b-0 lg:p-10">
              <div
                className="absolute inset-0 grid-backdrop opacity-60 [mask-image:linear-gradient(to_bottom_right,black,transparent_70%)]"
                aria-hidden="true"
              />
              <div className="relative">
                <SectionHeading
                  id="contact-title"
                  index="07"
                  label="Contact"
                  title="Let's build something clear and useful."
                  description="Have a product to improve, a team to join, or a problem worth untangling? Tell me a little about it. I usually reply within two business days."
                />

                <div className="mt-8 space-y-5">
                  <a
                    href={`mailto:${profile.email}`}
                    className="group inline-flex items-center gap-3 rounded-xl focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                  >
                    <span className="grid size-10 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground">
                      <Mail className="size-4" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block font-mono text-[0.5625rem] tracking-[0.1em] text-muted-foreground uppercase">
                        Email
                      </span>
                      <span className="mt-0.5 flex items-center gap-1.5 text-sm font-medium underline decoration-border underline-offset-4 transition-colors group-hover:decoration-foreground">
                        {profile.email}
                        <ArrowUpRight className="size-3.5 text-muted-foreground" aria-hidden="true" />
                      </span>
                    </span>
                  </a>

                  <div className="flex items-center gap-3">
                    <span className="grid size-10 shrink-0 place-items-center rounded-full bg-muted text-foreground">
                      <MapPin className="size-4" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block font-mono text-[0.5625rem] tracking-[0.1em] text-muted-foreground uppercase">
                        Location
                      </span>
                      <span className="mt-0.5 block text-sm font-medium">{profile.location}</span>
                      <span className="mt-0.5 block text-[0.6875rem] text-muted-foreground">
                        {profile.timezone} · remote-friendly
                      </span>
                    </span>
                  </div>
                </div>

                <div className="mt-8 border-t border-border/70 pt-6">
                  <p className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="relative flex size-2" aria-hidden="true">
                      <span className="absolute inline-flex size-full animate-pulse-soft rounded-full bg-primary" />
                      <span className="relative inline-flex size-2 rounded-full bg-primary" />
                    </span>
                    <span className="font-medium text-foreground">{profile.availability.label}</span>
                    <span aria-hidden="true">·</span>
                    {profile.availability.detail}
                  </p>

                  <div className="mt-4 flex items-center gap-1">
                    {profile.socials.map((social) => (
                      <a
                        key={social.platform}
                        href={social.href}
                        target={social.platform === 'email' ? undefined : '_blank'}
                        rel={social.platform === 'email' ? undefined : 'noreferrer'}
                        aria-label={social.label}
                        className="inline-flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                      >
                        <SocialIcon platform={social.platform} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 lg:p-10">
              {status === 'success' ? (
                <div
                  ref={successRef}
                  tabIndex={-1}
                  role="status"
                  className="flex h-full min-h-80 flex-col items-start justify-center rounded-2xl border border-border bg-muted/30 p-6 focus:outline-none sm:p-8"
                >
                  <span className="grid size-12 place-items-center rounded-full bg-accent text-accent-foreground">
                    <CheckCircle2 className="size-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold tracking-[-0.02em]">Message sent</h3>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
                    Thanks for reaching out. Your message was accepted by the contact endpoint, and
                    I&rsquo;ll get back to you as soon as I can.
                  </p>
                  <Button
                    type="button"
                    variant="secondary"
                    className="mt-6"
                    onClick={() => setStatus('idle')}
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-sm font-semibold">Send a message</h3>
                    <span className="font-mono text-[0.5625rem] tracking-[0.08em] text-muted-foreground uppercase">
                      All fields required
                    </span>
                  </div>

                  {!CONTACT_ENDPOINT ? (
                    <div className="mt-4 flex gap-2.5 rounded-xl border border-dashed border-border bg-muted/40 p-3.5 text-xs leading-relaxed text-muted-foreground">
                      <Info className="mt-0.5 size-3.5 shrink-0 text-primary" aria-hidden="true" />
                      <p>
                        <span className="font-medium text-foreground">
                          Form integration placeholder.
                        </span>{' '}
                        This template is not connected to an email service, so messages are not
                        delivered. Set{' '}
                        <code className="rounded bg-card px-1 py-0.5 font-mono text-[0.625rem]">
                          VITE_CONTACT_ENDPOINT
                        </code>{' '}
                        to enable the form, or email me directly at{' '}
                        <a
                          href={`mailto:${profile.email}`}
                          className="font-medium text-foreground underline decoration-border underline-offset-2 hover:decoration-foreground"
                        >
                          {profile.email}
                        </a>
                        .
                      </p>
                    </div>
                  ) : null}

                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <Label htmlFor={fieldIds.name}>Name</Label>
                      <Input
                        id={fieldIds.name}
                        name="name"
                        autoComplete="name"
                        placeholder="Your name"
                        value={values.name}
                        onChange={handleChange('name')}
                        aria-required="true"
                        aria-invalid={errors.name ? true : undefined}
                        aria-describedby={errors.name ? 'contact-name-error' : undefined}
                        maxLength={80}
                      />
                      <FieldError id="contact-name-error">{errors.name}</FieldError>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor={fieldIds.email}>Email</Label>
                      <Input
                        id={fieldIds.email}
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="you@company.com"
                        value={values.email}
                        onChange={handleChange('email')}
                        aria-required="true"
                        aria-invalid={errors.email ? true : undefined}
                        aria-describedby={errors.email ? 'contact-email-error' : undefined}
                        maxLength={160}
                      />
                      <FieldError id="contact-email-error">{errors.email}</FieldError>
                    </div>

                    <div className="space-y-1.5 sm:col-span-2">
                      <Label htmlFor={fieldIds.subject}>Subject</Label>
                      <Input
                        id={fieldIds.subject}
                        name="subject"
                        placeholder="What would you like to talk about?"
                        value={values.subject}
                        onChange={handleChange('subject')}
                        aria-required="true"
                        aria-invalid={errors.subject ? true : undefined}
                        aria-describedby={errors.subject ? 'contact-subject-error' : undefined}
                        maxLength={120}
                      />
                      <FieldError id="contact-subject-error">{errors.subject}</FieldError>
                    </div>

                    <div className="space-y-1.5 sm:col-span-2">
                      <Label htmlFor={fieldIds.message}>Message</Label>
                      <Textarea
                        id={fieldIds.message}
                        name="message"
                        placeholder="A little context, goals, and timeline…"
                        value={values.message}
                        onChange={handleChange('message')}
                        aria-required="true"
                        aria-invalid={errors.message ? true : undefined}
                        aria-describedby={errors.message ? 'contact-message-error' : undefined}
                        maxLength={4000}
                      />
                      <FieldError id="contact-message-error">{errors.message}</FieldError>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="max-w-xs text-[0.6875rem] leading-relaxed text-muted-foreground/80">
                      Your details are only used to reply to this message.
                    </p>
                    <Button type="submit" disabled={status === 'submitting'} className="sm:min-w-36">
                      {status === 'submitting' ? (
                        <>
                          <LoaderCircle className="animate-spin" aria-hidden="true" />
                          Sending
                        </>
                      ) : (
                        <>
                          Send message
                          <Send aria-hidden="true" />
                        </>
                      )}
                    </Button>
                  </div>

                  <div ref={statusRef} tabIndex={-1} className="focus:outline-none">
                    {status === 'error' ? (
                      <div
                        role="alert"
                        className="mt-4 flex gap-2.5 rounded-xl border border-destructive/30 bg-destructive/5 p-3.5 text-xs leading-relaxed text-destructive"
                      >
                        <TriangleAlert className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
                        <p>
                          Something went wrong and your message was <strong>not</strong> sent.
                          Please try again, or email me directly at{' '}
                          <a
                            href={`mailto:${profile.email}`}
                            className="font-medium underline underline-offset-2"
                          >
                            {profile.email}
                          </a>
                          .
                        </p>
                      </div>
                    ) : null}

                    {status === 'unconfigured' ? (
                      <div
                        role="alert"
                        className="mt-4 flex gap-2.5 rounded-xl border border-border bg-muted/50 p-3.5 text-xs leading-relaxed text-muted-foreground"
                      >
                        <Info className="mt-0.5 size-3.5 shrink-0 text-primary" aria-hidden="true" />
                        <p>
                          This form is not connected to an email service, so your message was{' '}
                          <strong>not</strong> sent. Please email me at{' '}
                          <a
                            href={`mailto:${profile.email}`}
                            className="font-medium text-foreground underline underline-offset-2"
                          >
                            {profile.email}
                          </a>{' '}
                          instead.
                        </p>
                      </div>
                    ) : null}
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
