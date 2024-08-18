import React, { useState } from 'react';
import { Typography, Button } from '@mui/material';

interface ExpandableTextProps {
  text: string;
  maxLines: number;
}

const ExpandableText: React.FC<ExpandableTextProps> = ({ text, maxLines }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <Typography
        variant="body1"
        sx={{
          display: '-webkit-box',
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          WebkitLineClamp: isExpanded ? 'none' : maxLines,
          textOverflow: 'ellipsis',
        }}
      >
        {text}
      </Typography>
      {text.split(' ').length > maxLines * 10 && ( // Assuming approx 10 words per line
        <Button onClick={toggleExpand}>
          {isExpanded ? 'Read Less' : 'Read More'}
        </Button>
      )}
    </div>
  );
};

export default ExpandableText;
