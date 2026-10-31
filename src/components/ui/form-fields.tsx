import * as React from 'react'

import { cn } from '@/lib/utils'

const fieldBase =
  'w-full rounded-xl border border-input bg-card px-3.5 py-2.5 text-sm text-foreground shadow-[0_1px_2px_rgb(0_0_0/0.02)] transition-[border-color,box-shadow] placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/20 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/15'

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
  ({ className, type, ...props }, ref) => (
    <input ref={ref} type={type} className={cn(fieldBase, 'h-11', className)} {...props} />
  ),
)
Input.displayName = 'Input'

const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<'textarea'>>(
  ({ className, ...props }, ref) => (
    <textarea ref={ref} className={cn(fieldBase, 'min-h-32 resize-y', className)} {...props} />
  ),
)
Textarea.displayName = 'Textarea'

const Label = React.forwardRef<HTMLLabelElement, React.ComponentProps<'label'>>(
  ({ className, ...props }, ref) => (
    <label
      ref={ref}
      className={cn('text-sm font-medium leading-none text-foreground', className)}
      {...props}
    />
  ),
)
Label.displayName = 'Label'

interface FieldErrorProps {
  id: string
  children?: React.ReactNode
}

function FieldError({ id, children }: FieldErrorProps) {
  if (!children) return null

  return (
    <p id={id} role="alert" className="text-xs leading-relaxed text-destructive">
      {children}
    </p>
  )
}

export { FieldError, Input, Label, Textarea }
