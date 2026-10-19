import React, { useContext } from 'react'
import { GridContext } from '../Grid'
import { HeaderContainer } from './styles'

export function Header() {
  const { title, version } = useContext(GridContext)

  return (
    <HeaderContainer>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          lineHeight: '1.2' // Aproxima as linhas para não ficar muito alto
        }}
      >
        <strong style={{ fontSize: '1.1rem', marginBottom: '2px' }}>
          {title}
        </strong>

        {version && (
          <span
            style={{
              fontSize: '0.9rem',
              color: '#555',
              background: 'rgba(255, 255, 255, 0.5)', // Um fundo sutil se o header for cinza
              padding: '2px 8px',
              borderRadius: '12px',
              fontWeight: 600,
              marginTop: '4px',
              border: '1px solid rgba(0,0,0,0.05)'

            }}
          >
            {version}
          </span>
        )}
      </div>
    </HeaderContainer>
  )
}
