"use client";

import { useState } from "react";
import {
  Card,
  CardBody,
  Image,
  User,
  Link,
  Divider,
  Button,
  Badge,
  Avatar,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
const colors = [
  "default",
  "primary",
  "secondary",
  "success",
  "warning",
  "danger",
];

export default function Page() {
  return (
    <div className="my-12">
      <div className="py-4">
        <div className="space-y-1">
          <h4 className="text-medium font-medium">⚫︎ Button Components</h4>
          <p className="text-small text-default-400">
            3種類のボタンコンポーネント
          </p>
        </div>
        <Divider className="my-4" />
        <Button color="primary" variant="shadow" className="mr-2">
          Button 1
        </Button>
        <Button color="primary" variant="flat" className="mr-2">
          Button 2
        </Button>
        <Button color="primary" variant="bordered">
          Button 3
        </Button>
      </div>
      <div className="py-4">
        <div className="space-y-1">
          <h4 className="text-medium font-medium">⚫︎ Card Components</h4>
          <p className="text-small text-default-400">カードコンポーネント</p>
        </div>
        <Divider className="my-4" />
        <Card className="py-4 cursor-pointer">
          <CardBody className="flex justify-between items-center pb-0 pt-2 px-4 flex-col md:flex-row">
            <div>
              <small className="text-default-500">React</small>
              <h4 className="font-bold text-large">
                Next
                UIを使用してみてプロトタイプを作成してみようと思っていますがどうでしょうか。あいうえおかきくけさしすせそ
              </h4>
              <small className="text-default-500">4月22日 12:00 </small>
            </div>
          </CardBody>
        </Card>
      </div>

      <div className="py-4">
        <div className="space-y-1">
          <h4 className="text-medium font-medium">⚫︎ User Components</h4>
          <p className="text-small text-default-400">ユーザーコンポーネント</p>
        </div>
        <Divider className="my-4" />
        <div className="flex gap-4 items-center mb-4">
          <Badge content="50" color="danger" shape="circle" showOutline={false}>
            <Avatar
              isBordered
              radius="full"
              src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
            />
          </Badge>
        </div>
        <User
          name="テスト 太郎"
          description={
            <Link
              href="https://twitter.com/sakamotokazuyat"
              size="sm"
              isExternal
            >
              @sakamotokazuyat
            </Link>
          }
          avatarProps={{
            src: "https://i.pravatar.cc/150?u=a04258a2462d826712d",
          }}
        />
      </div>

      <div className="py-4">
        <div className="space-y-1">
          <h4 className="text-medium font-medium">⚫︎ Table Components</h4>
          <p className="text-small text-default-400">テーブルコンポーネント</p>
        </div>
        <Divider className="my-4" />
        <div className="flex flex-col gap-3">
          <Table
            color={"success"}
            selectionMode="single"
            defaultSelectedKeys={["2"]}
            aria-label="Example static collection table"
          >
            <TableHeader>
              <TableColumn>タイトル</TableColumn>
              <TableColumn>カテゴリ</TableColumn>
              <TableColumn>ステータス</TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow key="1" className="cursor-pointer">
                <TableCell>
                  （1）Next UIを使用してみてプロトタイプを作成しました。
                </TableCell>
                <TableCell>React, Next.js</TableCell>
                <TableCell>公開中</TableCell>
              </TableRow>
              <TableRow key="2" className="cursor-pointer">
                <TableCell>
                  （2）Next UIを使用してみてプロトタイプを作成しました。
                </TableCell>
                <TableCell>Nuxt Vue</TableCell>
                <TableCell>公開中</TableCell>
              </TableRow>
              <TableRow key="3" className="cursor-pointer">
                <TableCell>
                  （3）Next UIを使用してみてプロトタイプを作成しました。
                </TableCell>
                <TableCell>Senior Developer</TableCell>
                <TableCell>公開中</TableCell>
              </TableRow>
              <TableRow key="4" className="cursor-pointer">
                <TableCell>
                  （4）Next UIを使用してみてプロトタイプを作成しました。
                </TableCell>
                <TableCell>TypeScript</TableCell>
                <TableCell>非公開</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
