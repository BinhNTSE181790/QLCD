import React from 'react';
import { motion } from 'framer-motion';

const FlipCard = ({ card, isFlipped, onFlip, cardWidth, cardHeight }) => {
  return (
    <div
      style={{
        position: 'absolute',
        left: `${card.x}px`,
        top: `${card.y}px`,
        width: `${cardWidth}px`,
        height: `${cardHeight}px`,
        perspective: '1000px',
        zIndex: 10
      }}
    >
      <motion.div
        onClick={() => onFlip(card.id)}
        style={{
          width: '100%',
          height: '100%',
          cursor: 'pointer',
          transformStyle: 'preserve-3d',
          position: 'relative'
        }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        {/* Front side - Title */}
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            borderRadius: '1rem',
            boxShadow: '0 15px 40px rgba(0, 0, 0, 0.3)',
            background: 'transparent',
            border: '2px solid #fbbf24',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem'
          }}
        >
          <h4 style={{ fontSize: '1.25rem', fontWeight: '700', lineHeight: '1.5', color: '#fbbf24', textAlign: 'center' }}>
            {card.title}
          </h4>
        </div>

        {/* Back side - Content */}
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            borderRadius: '1rem',
            boxShadow: '0 15px 40px rgba(0, 0, 0, 0.3)',
            backgroundColor: 'rgba(255, 255, 255, 0.6)',
            border: '2px solid #d1d5db',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
            transform: 'rotateY(180deg)'
          }}
        >
          <p style={{ 
            fontSize: '0.95rem',
            color: '#000000',
            lineHeight: '1.6',
            fontWeight: '500',
            textAlign: 'justify'
          }}>
            {card.content}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default FlipCard;
