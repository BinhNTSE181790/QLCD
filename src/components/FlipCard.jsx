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
            backgroundColor: 'rgba(0, 0, 0, 0.15)',
            borderRadius: '1rem',
            boxShadow: '0 15px 40px rgba(0, 0, 0, 0.6)',
            background: 'transparent',
            border: '2px solid #575757',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
          }}
        >
          <h4 style={{ fontSize: '1.25rem', fontWeight: '700', lineHeight: '1.5', color: '#1f2937', textAlign: 'center' }}>
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
            backgroundColor: 'rgba(253, 230, 138, 0.5)',
            border: '2px solid #d1d5db',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
            transform: 'rotateY(180deg)',
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)',
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
