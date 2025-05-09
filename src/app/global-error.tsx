'use client'

import NextError from 'next/error'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const { digest } = error
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <p>{digest}</p>
        <NextError statusCode={0} />
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  )
}
