export interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

export const stats: Stat[] = [
  { value: "80", suffix: "+", label: "Projects Delivered" },
  { value: "50", suffix: "+", label: "Enterprise Clients" },
  { value: "98", suffix: "%", label: "Client Satisfaction" },
  { value: "6", suffix: "+", label: "Years of Excellence" },
];
