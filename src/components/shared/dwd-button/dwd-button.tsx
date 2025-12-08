'use client'
import './dwd-button.css'

import { useState } from 'react'
import { getDownloadURL, ref } from 'firebase/storage'
import { storage } from '../../../util/firebase'
import { DownloadButtonType } from './dwd-button.type'

const DownloadButton = ({ path, label = 'Download CV' }: DownloadButtonType) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleDownload = async () => {
    setLoading(true)
    setError(null)

    try {
      const fileRef = ref(storage, path)
      const url = await getDownloadURL(fileRef)

      const a = document.createElement('a')
      a.href = url
      a.download = path?.split('/').pop() || 'file.pdf'
      a.target = '_blank'
      a.click()
    } catch (err) {
      console.error('Download failed', err)
      setError('Could not download file.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <button
        onClick={handleDownload}
        className="dw-button"
        disabled={loading}
      >
        {loading ? 'Downloading...' : label}
        <i className="fa-solid fa-download"></i>
      </button>

      {error && (
        <p className="text-red-500 mt-2 text-sm">
          {error}
        </p>
      )}
    </div>
  )
}

export { DownloadButton }
