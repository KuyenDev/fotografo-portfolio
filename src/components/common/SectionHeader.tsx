import React from 'react';
import './SectionHeader.css';

interface SectionHeaderProps {
  tag?: string;
  number?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  tag,
  number,
  title,
  subtitle,
  align = 'left',
  className = '',
}) => {
  return (
    <div className={`section-header section-header--${align} ${className}`}>
      <div className="section-header-meta">
        {tag && <span className="editorial-tag">{tag}</span>}
        {number && <span className="section-header-num">{number}</span>}
      </div>
      <h2 className="section-header-title">{title}</h2>
      {subtitle && <p className="section-header-subtitle">{subtitle}</p>}
    </div>
  );
};
