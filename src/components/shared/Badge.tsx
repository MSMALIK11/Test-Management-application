interface BadgeProp {
  background?: string;
  children: React.ReactNode;
}

const Badge = ({ background, children }: BadgeProp) => {
  return (
    <div>
      {children && (
        <span
          className={`ntext-xs nfont-medium nrounded-full npx-3 npy-0.5 ninline-block ntext-white nbg-brand 
            nshadow-sm`}
          style={background ? { background } : {}}
        >
          {children}
        </span>
      )}
    </div>
  );
};

export default Badge;
