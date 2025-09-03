import { useState, useEffect } from 'react';
import { useAuthContext } from './useAuth';

export interface PointsData {
  userId: string;
  currentPoints: number;
  totalEarned: number;
  category: 'student' | 'professional';
  lastUpdated: string;
}

export interface RedemptionHistory {
  id: string;
  userId: string;
  rewardTitle: string;
  pointsUsed: number;
  date: string;
  category: 'student' | 'professional';
}

export interface Reward {
  id: string;
  title: string;
  description: string;
  pointsRequired: number;
  category: 'student' | 'professional';
  icon: string;
  type: 'discount' | 'badge' | 'voucher' | 'resource' | 'event';
}

const STUDENT_REWARDS: Reward[] = [
  {
    id: 'course-discount-20',
    title: '20% Course Discount',
    description: 'Get 20% off on any programming course',
    pointsRequired: 100,
    category: 'student',
    icon: '🎓',
    type: 'discount'
  },
  {
    id: 'practice-test-bundle',
    title: 'Practice Test Bundle',
    description: 'Access to 10 premium practice tests',
    pointsRequired: 150,
    category: 'student',
    icon: '📝',
    type: 'resource'
  },
  {
    id: 'achievement-badge',
    title: 'Achievement Badge',
    description: 'Special badge for your profile',
    pointsRequired: 75,
    category: 'student',
    icon: '🏆',
    type: 'badge'
  },
  {
    id: 'mentorship-session',
    title: '1-Hour Mentorship',
    description: 'One-on-one session with industry expert',
    pointsRequired: 200,
    category: 'student',
    icon: '👨‍🏫',
    type: 'event'
  },
  {
    id: 'xcampus-tshirt',
    title: 'XCampus T-Shirt',
    description: 'Premium cotton tee with XCampus logo',
    pointsRequired: 200,
    category: 'student',
    icon: '👕',
    type: 'voucher'
  },
  {
    id: 'xcampus-mug',
    title: 'XCampus Coffee Mug',
    description: 'Ceramic coffee mug with XCampus branding',
    pointsRequired: 150,
    category: 'student',
    icon: '☕',
    type: 'voucher'
  },
  {
    id: 'stickers-pack',
    title: 'Laptop Stickers Pack',
    description: 'Cool tech stickers bundle for your laptop',
    pointsRequired: 100,
    category: 'student',
    icon: '💻',
    type: 'voucher'
  },
  {
    id: 'xcampus-hoodie',
    title: 'XCampus Hoodie',
    description: 'Premium hooded sweatshirt with XCampus logo',
    pointsRequired: 500,
    category: 'student',
    icon: '🧥',
    type: 'voucher'
  }
];

const PROFESSIONAL_REWARDS: Reward[] = [
  {
    id: 'certification-voucher',
    title: 'Certification Voucher',
    description: 'Free voucher for industry certification',
    pointsRequired: 500,
    category: 'professional',
    icon: '🏅',
    type: 'voucher'
  },
  {
    id: 'premium-resources',
    title: 'Premium Resource Access',
    description: '6 months of premium learning resources',
    pointsRequired: 750,
    category: 'professional',
    icon: '💎',
    type: 'resource'
  },
  {
    id: 'conference-pass',
    title: 'Conference Pass',
    description: 'Free pass to tech conference',
    pointsRequired: 1000,
    category: 'professional',
    icon: '🎫',
    type: 'event'
  },
  {
    id: 'course-discount-50',
    title: '50% Course Discount',
    description: 'Get 50% off on any advanced course',
    pointsRequired: 600,
    category: 'professional',
    icon: '📚',
    type: 'discount'
  }
];

export const usePoints = () => {
  const { user, isAuthenticated } = useAuthContext();
  const [pointsData, setPointsData] = useState<PointsData | null>(null);
  const [redemptionHistory, setRedemptionHistory] = useState<RedemptionHistory[]>([]);

  useEffect(() => {
    if (isAuthenticated && user) {
      loadPointsData();
      loadRedemptionHistory();
    }
  }, [isAuthenticated, user]);

  const loadPointsData = () => {
    if (!user) return;
    
    const stored = localStorage.getItem(`points_${user.id}`);
    if (stored) {
      setPointsData(JSON.parse(stored));
    } else {
      // Initialize new user with starting points
      const newPointsData: PointsData = {
        userId: user.id,
        currentPoints: user.role === 'student' ? 150 : 600, // Starting points
        totalEarned: user.role === 'student' ? 150 : 600,
        category: user.role === 'student' ? 'student' : 'professional',
        lastUpdated: new Date().toISOString(),
      };
      setPointsData(newPointsData);
      localStorage.setItem(`points_${user.id}`, JSON.stringify(newPointsData));
    }
  };

  const loadRedemptionHistory = () => {
    if (!user) return;
    
    const stored = localStorage.getItem(`redemption_history_${user.id}`);
    if (stored) {
      setRedemptionHistory(JSON.parse(stored));
    }
  };

  const addPoints = (points: number, reason: string = 'Activity completed') => {
    if (!user || !pointsData) return false;

    const updatedData: PointsData = {
      ...pointsData,
      currentPoints: pointsData.currentPoints + points,
      totalEarned: pointsData.totalEarned + points,
      lastUpdated: new Date().toISOString(),
    };

    setPointsData(updatedData);
    localStorage.setItem(`points_${user.id}`, JSON.stringify(updatedData));
    return true;
  };

  const redeemReward = (reward: Reward): { success: boolean; message: string } => {
    if (!user || !pointsData) {
      return { success: false, message: 'User not authenticated' };
    }

    if (pointsData.currentPoints < reward.pointsRequired) {
      return { success: false, message: 'Insufficient points' };
    }

    if (pointsData.category !== reward.category) {
      return { success: false, message: 'Reward not available for your category' };
    }

    // Deduct points
    const updatedData: PointsData = {
      ...pointsData,
      currentPoints: pointsData.currentPoints - reward.pointsRequired,
      lastUpdated: new Date().toISOString(),
    };

    // Add to redemption history
    const newRedemption: RedemptionHistory = {
      id: Date.now().toString(),
      userId: user.id,
      rewardTitle: reward.title,
      pointsUsed: reward.pointsRequired,
      date: new Date().toISOString(),
      category: reward.category,
    };

    const updatedHistory = [...redemptionHistory, newRedemption];

    // Save to localStorage
    setPointsData(updatedData);
    setRedemptionHistory(updatedHistory);
    localStorage.setItem(`points_${user.id}`, JSON.stringify(updatedData));
    localStorage.setItem(`redemption_history_${user.id}`, JSON.stringify(updatedHistory));

    return { success: true, message: 'Reward redeemed successfully!' };
  };

  const getAvailableRewards = (): Reward[] => {
    if (!pointsData) return [];
    return pointsData.category === 'student' ? STUDENT_REWARDS : PROFESSIONAL_REWARDS;
  };

  const getRedeemableRewards = (): Reward[] => {
    if (!pointsData) return [];
    return getAvailableRewards().filter(reward => reward.pointsRequired <= pointsData.currentPoints);
  };

  return {
    pointsData,
    redemptionHistory,
    addPoints,
    redeemReward,
    getAvailableRewards,
    getRedeemableRewards,
    refreshData: loadPointsData,
  };
};