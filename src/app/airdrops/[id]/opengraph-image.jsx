import { ImageResponse } from 'next/og';
import { airdropsData } from '../../../data/airdrops';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image({ params }) {
  const resolvedParams = await params;
  const airdrop = airdropsData.find(a => a.id === resolvedParams.id);

  if (!airdrop) {
    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0a0f1a',
            fontSize: 64,
            fontWeight: 'bold',
            color: '#fff',
          }}
        >
          <span>DropHunt</span>
          <span style={{ fontSize: 32, color: '#8b95a5', marginTop: 16 }}>
            Airdrop Not Found
          </span>
        </div>
      ),
      { ...size }
    );
  }

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#0a0f1a',
          padding: 60,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 40,
          }}
        >
          <div
            style={{
              width: 140,
              height: 140,
              borderRadius: 28,
              background: `linear-gradient(135deg, ${airdrop.color}, ${airdrop.color}99)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 72,
              fontWeight: 'bold',
              color: '#fff',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
            }}
          >
            {airdrop.name.charAt(0)}
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
            }}
          >
            <span
              style={{
                fontSize: 24,
                color: '#00d2ff',
                fontWeight: 600,
                letterSpacing: 4,
              }}
            >
              DROPHUNT
            </span>
            <span
              style={{
                fontSize: 72,
                fontWeight: 'bold',
                color: '#fff',
                lineHeight: 1,
              }}
            >
              {airdrop.name}
            </span>
            <span
              style={{
                fontSize: 36,
                color: '#8b95a5',
              }}
            >
              {airdrop.ticker}
            </span>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            gap: 48,
            marginTop: 60,
            padding: 32,
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            borderRadius: 20,
            border: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
            }}
          >
            <span style={{ fontSize: 18, color: '#8b95a5' }}>ESTIMATED VALUE</span>
            <span
              style={{
                fontSize: 42,
                fontWeight: 'bold',
                color: '#00FF88',
              }}
            >
              {airdrop.value}
            </span>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
            }}
          >
            <span style={{ fontSize: 18, color: '#8b95a5' }}>STATUS</span>
            <span
              style={{
                fontSize: 42,
                fontWeight: 'bold',
                color: airdrop.status === 'Active' ? '#00FF88' : '#f59e0b',
              }}
            >
              {airdrop.status}
            </span>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
            }}
          >
            <span style={{ fontSize: 18, color: '#8b95a5' }}>NETWORK</span>
            <span style={{ fontSize: 42, fontWeight: 'bold', color: '#fff' }}>
              {airdrop.network}
            </span>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            marginTop: 'auto',
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: 'linear-gradient(135deg, #00d2ff, #7b61ff)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 24,
              fontWeight: 'bold',
              color: '#fff',
            }}
          >
            D
          </div>
          <span
            style={{
              fontSize: 24,
              color: '#8b95a5',
              fontWeight: 500,
            }}
          >
            drophunt.com
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}