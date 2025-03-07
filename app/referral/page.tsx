'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Users, Copy, Gift, Award } from 'lucide-react';

const referrals = [
  {
    user: 'Alex Smith',
    date: '2024-03-20',
    status: 'active',
    earnings: 500,
  },
  {
    user: 'Maria Garcia',
    date: '2024-03-19',
    status: 'active',
    earnings: 300,
  },
  {
    user: 'John Doe',
    date: '2024-03-18',
    status: 'pending',
    earnings: 0,
  },
];

export default function ReferralPage() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Referral Overview */}
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold flex items-center gap-2">
                  <Gift className="w-8 h-8" />
                  Referral Program
                </h1>
                <p className="text-muted-foreground">
                  Invite friends and earn 10% of their first deposit!
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Input value="JOHN123" readOnly className="font-mono" />
                <Button variant="outline" size="icon">
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <CardTitle className="text-sm font-medium">Total Referrals</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">15</div>
              <p className="text-xs text-muted-foreground">+3 this month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
              <Gift className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹3,250</div>
              <p className="text-xs text-muted-foreground">+₹500 this month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <CardTitle className="text-sm font-medium">Reward Level</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Silver</div>
              <p className="text-xs text-muted-foreground">5 more to Gold</p>
            </CardContent>
          </Card>
        </div>

        {/* How It Works */}
        <Card>
          <CardHeader>
            <CardTitle>How It Works</CardTitle>
            <CardDescription>Three simple steps to start earning</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="font-medium">Share Your Code</h3>
                <p className="text-sm text-muted-foreground">
                  Share your unique referral code with friends
                </p>
              </div>
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="font-medium">Friends Sign Up</h3>
                <p className="text-sm text-muted-foreground">
                  They create an account using your code
                </p>
              </div>
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="font-medium">Earn Rewards</h3>
                <p className="text-sm text-muted-foreground">
                  Get 10% of their first deposit instantly
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Referral List */}
        <Card>
          <CardHeader>
            <CardTitle>Your Referrals</CardTitle>
            <CardDescription>Track your referral activity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {referrals.map((referral, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-lg bg-accent/50"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">{referral.user}</h4>
                      <p className="text-sm text-muted-foreground">{referral.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">₹{referral.earnings}</p>
                    <p
                      className={`text-sm ${
                        referral.status === 'active' ? 'text-green-500' : 'text-yellow-500'
                      }`}
                    >
                      {referral.status.charAt(0).toUpperCase() + referral.status.slice(1)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}