import React from 'react';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  glow?: boolean;
  hoverGlow?: boolean;
  glowColor?: 'cyan' | 'purple' | 'emerald';
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  glow = false,
  hoverGlow = true,
  glowColor = 'cyan',
  className = '',
  ...props
}) => {
  const glowColors = {
    cyan: 'before:from-cyan-500/10 before:to-primary/5',
    purple: 'before:from-purple-500/10 before:to-accent-purple/5',
    emerald: 'before:from-emerald-500/10 before:to-accent-emerald/5',
  };

  return (
    <div
      className={`
        relative overflow-hidden rounded-2xl border border-white/5 bg-background-card p-6 
        transition-all duration-500 backdrop-blur-xl
        ${hoverGlow ? 'hover:border-white/15 hover:shadow-[0_0_40px_0_rgba(0,242,254,0.03)] hover:-translate-y-1' : ''}
        ${glow ? `before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-tr ${glowColors[glowColor]} before:opacity-50` : ''}
        ${className}
      `}
      {...props}
    >
      {/* Absolute background mesh overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.01] to-transparent pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
