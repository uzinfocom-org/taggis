const withIcon = (icon, px = '0 0 24 24') => {
  const Icon = ({ size = 24, color = 'currentColor' }) => {
    return (
      <svg
        viewBox={px}
        width={size}
        height={size}
        fill={color}
        dangerouslySetInnerHTML={{ __html: icon }}
      />
    )
  }

  return Icon
}

export default withIcon
