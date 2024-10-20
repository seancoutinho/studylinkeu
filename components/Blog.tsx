import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    title: "5 Tips for a Successful Visa Application",
    excerpt: "Navigate the visa application process with confidence using these expert tips.",
    date: "2023-05-15",
    category: "Visa",
  },
  {
    id: 2,
    title: "Top Universities in Germany for International Students",
    excerpt: "Discover the best German universities welcoming students from around the world.",
    date: "2023-05-10",
    category: "Universities",
  },
  {
    id: 3,
    title: "Living in the Netherlands: A Student's Guide",
    excerpt: "Everything you need to know about student life in the Netherlands.",
    date: "2023-05-05",
    category: "Student Life",
  },
];

const Blog = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Latest from Our Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="flex flex-col h-full">
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.date} | {post.category}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="mb-4">{post.excerpt}</p>
                <Button variant="outline" asChild>
                  <Link href={`/blog/${post.id}`}>Read More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild>
            <Link href="/blog">View All Posts</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;