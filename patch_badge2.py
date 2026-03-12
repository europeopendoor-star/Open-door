with open("src/components/ui/Badge.tsx", "r") as f:
    content = f.read()

content = content.replace(
    "export interface BadgeProps\n  extends React.HTMLAttributes<HTMLDivElement>,\n    VariantProps<typeof badgeVariants> {\n  className?: string;\n}",
    "export interface BadgeProps\n  extends React.HTMLAttributes<HTMLDivElement>,\n    VariantProps<typeof badgeVariants> {\n  className?: string;\n  children?: React.ReactNode;\n}"
)

with open("src/components/ui/Badge.tsx", "w") as f:
    f.write(content)
