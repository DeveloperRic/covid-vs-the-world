export class Story {
  public id: string;
  public timeposted: number;

  constructor(
    public type: string,
    public title: string,
    public author: string,
    public description: string
  ) {
    this.timeposted = Date.now();
  }

  static fromJSON(json): Story {
    const story = new Story(
      json.type,
      json.title,
      json.author,
      json.description
    );
    story.id = json.id;
    story.timeposted = json.timeposted;
    return story;
  }
}
