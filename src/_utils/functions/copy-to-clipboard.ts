export const copyToClipBoard = async (copy: string): Promise<string> => {
  try {
    await navigator.clipboard.writeText(copy)

    return copy + ' Copied!'
  } catch (err) {
    return 'Failed to copy ... ' + copy
  }
}
