import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const dummyData = [
  {
    title: "有名俳優の不倫報道にSNS騒然",
    sourcePost: {
      user: "@週刊ポスト",
      content: "【速報】俳優Xさんの不倫が週刊誌に報道されました。SNSではさまざまな反応が飛び交っています。",
      timestamp: "10分前"
    },
    comments: [
      "これはガチっぽいな…",
      "事務所の対応が早かったのは好感",
      "週刊誌の信憑性どうなん？"
    ]
  },
  {
    title: "人気YouTuberが突然の引退宣言",
    sourcePost: {
      user: "@YouTuber速報",
      content: "人気YouTuberのYさんが本日引退を発表。ファンからは驚きと悲しみの声が上がっています。",
      timestamp: "25分前"
    },
    comments: [
      "最近元気なかったもんね…",
      "まじかよ、青春だったのに…",
      "引退理由が気になる"
    ]
  }
];

export default function Home() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold flex items-center gap-2">
        <Sparkles className="w-6 h-6 text-yellow-500" />
        今日の話題まとめ
      </h1>
      {dummyData.map((topic, index) => (
        <Card key={index} className="rounded-2xl shadow-md">
          <CardContent className="p-4 space-y-3">
            <h2 className="text-xl font-semibold">{topic.title}</h2>
            <div className="bg-gray-100 p-3 rounded-md">
              <p className="text-sm text-gray-600">{topic.sourcePost.user} ・ {topic.sourcePost.timestamp}</p>
              <p className="text-base">{topic.sourcePost.content}</p>
            </div>
            <div className="space-y-1">
              {topic.comments.map((comment, i) => (
                <p key={i} className="text-sm text-gray-800 before:content-['\\2022'] before:mr-2 before:text-gray-400">
                  {comment}
                </p>
              ))}
            </div>
            <Button variant="outline" className="text-sm mt-2">もっと見る</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
