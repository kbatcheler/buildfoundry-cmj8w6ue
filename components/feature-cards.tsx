import { Card } from './ui/card';

export default function FeatureCards() {
  const features = [
    { title: 'AI Integration', description: 'Seamlessly integrates with AI chatbots.' },
    { title: 'Dark Mode', description: 'Supports light and dark themes.' },
    { title: 'Responsive Design', description: 'Looks great on all devices.' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {features.map((feature, index) => (
        <Card key={index}>
          <h2 className="text-xl font-bold">{feature.title}</h2>
          <p>{feature.description}</p>
        </Card>
      ))}
    </div>
  );
}